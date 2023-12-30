import React from 'react'
import {
  StepTitle,
  StepGroup,
  StepDescription,
  StepContent,
  Icon,
  Step,
} from 'semantic-ui-react'

const StepExampleCompleted = () => (
  <StepGroup>
    <Step completed>
      <Icon name='credit card' />
      <StepContent>
        <StepTitle>Billing</StepTitle>
        <StepDescription>Enter billing information</StepDescription>
      </StepContent>
    </Step>
  </StepGroup>
)

export default StepExampleCompleted
