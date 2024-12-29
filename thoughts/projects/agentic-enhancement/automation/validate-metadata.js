#!/usr/bin/env node

import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { readFile, readdir } from 'fs/promises';
import { join, resolve } from 'path';
import yaml from 'js-yaml';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// Logger setup
const logger = {
  info: (...args) => console.log('\x1b[36m%s\x1b[0m', ...args),
  error: (...args) => console.error('\x1b[31m%s\x1b[0m', ...args),
  success: (...args) => console.log('\x1b[32m%s\x1b[0m', ...args),
  warn: (...args) => console.warn('\x1b[33m%s\x1b[0m', ...args)
};

async function loadSchema() {
  try {
    const schemaPath = resolve('./automation/schemas/metadata.json');
    const schemaContent = await readFile(schemaPath, 'utf8');
    return JSON.parse(schemaContent);
  } catch (error) {
    logger.error('Failed to load schema:', error.message);
    process.exit(1);
  }
}

async function* walkDir(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const path = join(dir, file.name);
    if (file.isDirectory()) {
      yield* walkDir(path);
    } else if (file.name.endsWith('.md')) {
      yield path;
    }
  }
}

function extractMetadata(content) {
  try {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return null;
    return yaml.load(match[1]);
  } catch (error) {
    return null;
  }
}

async function validateFile(filePath, validate) {
  try {
    const content = await readFile(filePath, 'utf8');
    const metadata = extractMetadata(content);
    
    if (!metadata) {
      logger.warn(`No metadata found in ${filePath}`);
      return false;
    }

    const valid = validate(metadata);
    if (!valid) {
      logger.error(`\nValidation failed for ${filePath}:`);
      validate.errors.forEach(error => {
        logger.error(`  - ${error.instancePath}: ${error.message}`);
      });
      return false;
    }

    logger.success(`✓ ${filePath}`);
    return true;
  } catch (error) {
    logger.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  try {
    // Load and compile schema
    logger.info('Loading schema...');
    const schema = await loadSchema();
    const validate = ajv.compile(schema);

    // Process all markdown files
    logger.info('\nValidating files...');
    let validCount = 0;
    let totalCount = 0;

    for await (const filePath of walkDir('.')) {
      totalCount++;
      if (await validateFile(filePath, validate)) {
        validCount++;
      }
    }

    // Summary
    console.log('\nValidation Summary:');
    logger.info(`Total files processed: ${totalCount}`);
    logger.success(`Valid files: ${validCount}`);
    if (validCount < totalCount) {
      logger.error(`Invalid files: ${totalCount - validCount}`);
      process.exit(1);
    }

  } catch (error) {
    logger.error('Validation failed:', error.message);
    process.exit(1);
  }
}

main();
