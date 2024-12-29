# Thoughts Framework

A framework for AI-driven project planning and documentation with metadata validation. This framework provides structured templates and tools for managing tasks, decisions, and experiments in software projects.

## Features

- Structured templates with AI-readable metadata
- Metadata validation using JSON Schema
- Support for tasks, decisions, and experiments
- Command-line validation tool
- Rich AI context for enhanced automation

## Installation

```bash
npm install @cline/thoughts-framework
```

## Usage

### Directory Structure

Create a `thoughts` directory in your project with the following structure:

```
thoughts/
├── projects/
│   └── your-project/
│       ├── tasks/
│       │   ├── active/
│       │   ├── backlog/
│       │   └── completed/
│       ├── decisions/
│       └── experiments/
└── README.md
```

### Creating Documents

1. Copy the appropriate template from `templates/` to your project:
   - `task.md` for tasks
   - `decision.md` for architectural/technical decisions
   - `experiment.md` for experiments

2. Fill in the metadata and content following the template structure

### Validating Documents

Run the validation tool to check your documents:

```bash
npx validate-thoughts /path/to/thoughts
```

## Templates

### Task Template
Use for tracking work items, features, bugs, and other actionable items.

Key sections:
- Metadata with AI context
- Overview and objectives
- Implementation plan
- Success criteria
- Progress tracking

### Decision Template
Use for documenting architectural and technical decisions.

Key sections:
- Metadata with AI context
- Context and decision
- Consequences and risks
- Implementation plan
- Validation criteria

### Experiment Template
Use for documenting experimental investigations and proof-of-concepts.

Key sections:
- Metadata with AI context
- Hypothesis and expected outcomes
- Methodology and variables
- Metrics and data collection
- Results and conclusions

## Metadata Schema

The metadata schema (`automation/schemas/metadata.json`) defines the structure for AI-readable metadata. Key components:

- Document type and status
- Priority and dependencies
- Version and timestamps
- AI-specific context
  - Task/decision/experiment type
  - Complexity and impact
  - Required capabilities
  - Success criteria
  - Risk factors

## Development

### Running Tests

```bash
npm test
```

This will validate the template files against the schema.

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

MIT
