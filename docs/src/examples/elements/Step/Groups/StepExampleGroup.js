import React from 'react'
import {
  StepTitle,
  StepGroup,
  StepDescription,
  StepContent,
  Icon,
  Step,
} from 'semantic-ui-react'

const StepExampleGroup = () => (
  <StepGroup>
    <Step>
      <Icon name='truck' />
      <StepContent>
        <StepTitle>Shipping</StepTitle>
        <StepDescription>Choose your shipping options</StepDescription>
      </StepContent>
    </Step>

    <Step active>
      <Icon name='payment' />
      <StepContent>
        <StepTitle>Billing</StepTitle>
        <StepDescription>Enter billing information</StepDescription>
      </StepContent>
    </Step>

    <Step disabled>
      <Icon name='info' />
      <StepContent>
        <StepTitle>Confirm Order</StepTitle>
      </StepContent>
    </Step>
  </StepGroup>
)

export default StepExampleGroup
