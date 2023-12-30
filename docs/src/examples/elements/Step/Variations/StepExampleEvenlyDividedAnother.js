import React from 'react'
import {
  StepTitle,
  StepGroup,
  StepContent,
  Icon,
  Step,
} from 'semantic-ui-react'

const StepExampleEvenlyDividedAnother = () => (
  <StepGroup widths={2}>
    <Step active>
      <Icon name='credit card' />
      <StepContent>
        <StepTitle>Billing</StepTitle>
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

export default StepExampleEvenlyDividedAnother
