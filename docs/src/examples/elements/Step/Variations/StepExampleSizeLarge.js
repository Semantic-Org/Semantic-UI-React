import React from 'react'
import {
  StepTitle,
  StepGroup,
  StepContent,
  Icon,
  Step,
} from 'semantic-ui-react'

const StepExampleSizeLarge = () => (
  <StepGroup size='large'>
    <Step>
      <Icon name='truck' />
      <StepContent>
        <StepTitle>Shipping</StepTitle>
      </StepContent>
    </Step>

    <Step active>
      <Icon name='payment' />
      <StepContent>
        <StepTitle>Billing</StepTitle>
      </StepContent>
    </Step>
  </StepGroup>
)

export default StepExampleSizeLarge
