import React from 'react'
import {
  StepTitle,
  StepGroup,
  StepDescription,
  StepContent,
  Step,
} from 'semantic-ui-react'

const StepExampleOrdered = () => (
  <StepGroup ordered>
    <Step completed>
      <StepContent>
        <StepTitle>Shipping</StepTitle>
        <StepDescription>Choose your shipping options</StepDescription>
      </StepContent>
    </Step>

    <Step completed>
      <StepContent>
        <StepTitle>Billing</StepTitle>
        <StepDescription>Enter billing information</StepDescription>
      </StepContent>
    </Step>

    <Step active>
      <StepContent>
        <StepTitle>Confirm Order</StepTitle>
      </StepContent>
    </Step>
  </StepGroup>
)

export default StepExampleOrdered
