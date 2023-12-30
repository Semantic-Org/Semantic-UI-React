import React from 'react'
import {
  StepTitle,
  StepGroup,
  StepDescription,
  StepContent,
  Step,
} from 'semantic-ui-react'

const StepExampleCompletedOrdered = () => (
  <StepGroup ordered>
    <Step completed>
      <StepContent>
        <StepTitle>Billing</StepTitle>
        <StepDescription>Enter billing information</StepDescription>
      </StepContent>
    </Step>
  </StepGroup>
)

export default StepExampleCompletedOrdered
