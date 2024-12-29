---
# Decision Record Template
# This template defines the structure for architectural and technical decisions with AI-readable metadata.
# All fields marked with [Required] must be filled out.
# Remove all comments and placeholder text when using this template.

metadata:
  # [Required] Document type identifier
  type: decision
  
  # [Required] Current status of the decision
  # Valid values: draft|proposed|accepted|rejected|superseded|deprecated
  status: draft
  
  # [Required] Decision priority level
  # Valid values: low|medium|high
  priority: medium
  
  # [Required] List of dependent decisions or external dependencies
  # Format: ["decision-id-1", "decision-id-2"] or ["external-dependency-1"]
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
    # [Required] Type of decision being made
    # Valid values: architectural|technical|process|tooling|infrastructure|security
    decision_type: technical
    
    # [Required] Areas impacted by this decision
    # Minimum 1 area required
    impact_areas: []
    
    # [Required] Confidence level in the decision
    # Valid values: low|medium|high
    confidence_level: medium
    
    # [Required] Alternative options that were considered
    # Minimum 1 alternative required
    # Format: Array of objects with 'option' and 'reason_rejected' fields
    alternatives_considered: []
    
    # [Required] Key factors that influenced the decision
    # Minimum 1 factor required
    decision_factors: []
    
    # [Required] Estimated effort to implement
    # Format: number (person-hours)
    implementation_effort: 0
    
    # [Required] Risk level of the decision
    # Valid values: low|medium|high
    risk_level: medium
    
    # [Optional] Constraints that influenced the decision
    constraints: []
    
    # [Optional] Additional context for AI processing
    context_notes: ""
---

# [Decision Title]

## Context
[Describe the context and background that led to this decision. What problem are we trying to solve?]

## Decision
[Clearly state the decision that was made]

## Consequences
### Positive
- [List positive consequences]

### Negative
- [List negative consequences or trade-offs]

### Risks
- [List potential risks and mitigation strategies]

## Implementation
[Describe how this decision will be implemented]

### Steps
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Timeline
- Start date: YYYY-MM-DD
- Target completion: YYYY-MM-DD

## Validation
[Describe how we will validate that this decision was successful]

### Success Metrics
1. [Metric 1]
2. [Metric 2]

### Monitoring
[Describe how we will monitor the impact of this decision]

## References
- [Link to relevant documents, discussions, or resources]

## Review
### Review Date
YYYY-MM-DD

### Outcome
[Document the actual outcome after implementation]

### Lessons Learned
- [Key takeaways]
- [What worked well]
- [What could be improved]
