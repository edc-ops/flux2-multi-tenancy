---
# Task Template
# This template defines the structure for task documentation with AI-readable metadata.
# All fields marked with [Required] must be filled out.
# Remove all comments and placeholder text when using this template.

metadata:
  # [Required] Document type identifier
  type: task
  
  # [Required] Current status of the task
  # Valid values: draft|backlog|active|completed|blocked|archived
  status: backlog
  
  # [Required] Task priority level
  # Valid values: low|medium|high
  priority: medium
  
  # [Required] List of dependent task IDs or external dependencies
  # Format: ["task-id-1", "task-id-2"] or ["external-dependency-1"]
  dependencies: []
  
  # [Required] Creation timestamp
  # Format: ISO-8601 (YYYY-MM-DD)
  created: YYYY-MM-DD
  
  # [Required] Last update timestamp
  # Format: ISO-8601 (YYYY-MM-DD)
  updated: YYYY-MM-DD
  
  # [Required] Semantic version number
  # Format: major.minor.patch
  version: 1.0.0
  
  # [Required] Categorization tags
  # Minimum 1 tag required
  tags: []
  
  # [Required] AI-specific context and metadata
  ai_context:
    # [Required] Type of task being performed
    # Valid values: feature|infrastructure|bugfix|documentation|enhancement|maintenance
    task_type: feature
    
    # [Required] Estimated complexity level
    # Valid values: low|medium|high
    complexity: medium
    
    # [Required] Business/technical impact level
    # Valid values: low|medium|high
    impact: medium
    
    # [Required] Whether this task can be automated
    # Valid values: true|false
    automated_execution: false
    
    # [Required] Estimated effort in person-hours
    # Format: number
    estimated_effort: 0
    
    # [Required] Capabilities required for task execution
    # Minimum 1 capability required
    required_capabilities: []
    
    # [Optional] Risk factors to consider
    risk_factors: []
    
    # [Required] Criteria for task success
    # Minimum 1 criterion required
    success_criteria: []
    
    # [Optional] Additional context for AI processing
    context_notes: ""
---

# [Task Title]

## Overview
[Brief description of the task and its purpose]

## Objectives
- [Objective 1]
- [Objective 2]

## Requirements
- [Requirement 1]
- [Requirement 2]

## Dependencies
- [Dependency 1]
- [Dependency 2]

## Implementation Plan

### Steps
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Resources Required
- [Resource 1]
- [Resource 2]

## Success Criteria
- [Criterion 1]
- [Criterion 2]

## Timeline
- Estimated Start: YYYY-MM-DD
- Target Completion: YYYY-MM-DD

## Progress Tracking

### Milestones
- [ ] [Milestone 1]
- [ ] [Milestone 2]

### Blockers
- [Current blockers or potential issues]

## Notes
[Additional notes or considerations]

## Related
- [Links to related tasks, decisions, or experiments]
