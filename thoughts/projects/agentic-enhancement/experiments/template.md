---
# Experiment Template
# This template defines the structure for experimental investigations with AI-readable metadata.
# All fields marked with [Required] must be filled out.
# Remove all comments and placeholder text when using this template.

metadata:
  # [Required] Document type identifier
  type: experiment
  
  # [Required] Current status of the experiment
  # Valid values: draft|planned|running|completed|abandoned|archived
  status: planned
  
  # [Required] Experiment priority level
  # Valid values: low|medium|high
  priority: medium
  
  # [Required] List of dependent experiments or external dependencies
  # Format: ["experiment-id-1", "experiment-id-2"] or ["external-dependency-1"]
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
    # [Required] Type of experiment being conducted
    # Valid values: performance|reliability|usability|feature|security|scalability
    experiment_type: performance
    
    # [Required] Clear statement of what is being tested
    # Format: string, must be a complete hypothesis statement
    hypothesis: ""
    
    # [Required] Expected results if hypothesis is correct
    # Format: string, must describe measurable outcomes
    expected_outcome: ""
    
    # [Required] Level of confidence in the hypothesis
    # Valid values: low|medium|high
    confidence_level: medium
    
    # [Required] Level of risk in conducting the experiment
    # Valid values: low|medium|high
    risk_level: medium
    
    # [Required] Success criteria metrics
    # Minimum 1 metric required
    # Format: Array of objects with 'metric' and 'threshold' fields
    success_metrics: []
    
    # [Required] Control factors for the experiment
    # Minimum 1 factor required
    control_factors: []
    
    # [Required] Variables being tested
    # Format: Object with 'independent' and 'dependent' arrays
    variables: {
      "independent": [],
      "dependent": []
    }
    
    # [Optional] Resource requirements
    resource_requirements: []
    
    # [Optional] Additional context for AI processing
    context_notes: ""
---

# [Experiment Title]

## Overview
[Brief description of what this experiment is testing and why]

## Hypothesis
[Clear statement of the hypothesis being tested]

### Expected Outcome
[What results do we expect to see if the hypothesis is correct?]

## Methodology

### Setup
[Describe the experimental setup, including any controls or variables]

### Variables
1. Independent Variables:
   - [Variable 1]
   - [Variable 2]

2. Dependent Variables:
   - [Variable 1]
   - [Variable 2]

3. Control Variables:
   - [Variable 1]
   - [Variable 2]

### Test Environment
[Description of the test environment and any specific configurations]

### Data Collection
[How will data be collected and measured?]

## Metrics
[List of metrics to be collected and their significance]

### Primary Metrics
1. [Metric 1]
   - Description:
   - Collection method:
   - Success threshold:

2. [Metric 2]
   - Description:
   - Collection method:
   - Success threshold:

### Secondary Metrics
1. [Metric 1]
   - Description:
   - Collection method:

## Implementation
[Steps to implement and run the experiment]

### Timeline
- Start Date: YYYY-MM-DD
- End Date: YYYY-MM-DD
- Checkpoints:
  - [Checkpoint 1]: YYYY-MM-DD
  - [Checkpoint 2]: YYYY-MM-DD

### Resources Required
[List of resources needed to conduct the experiment]

## Results

### Raw Data
[Link to or summary of raw data collected]

### Analysis
[Analysis of the results]

### Observations
[Key observations and unexpected findings]

## Conclusions

### Outcome
[Was the hypothesis supported or rejected?]

### Key Findings
- [Finding 1]
- [Finding 2]

### Recommendations
[Recommendations based on the experiment results]

## Next Steps
[What actions should be taken based on these results?]

## References
- [Related experiments]
- [Supporting documentation]
- [External resources]
