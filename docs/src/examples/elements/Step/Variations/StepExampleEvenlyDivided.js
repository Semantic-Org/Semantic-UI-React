import React from 'react'
import {
  StepTitle,
  StepGroup,
  StepContent,
  Icon,
  Step,
} from 'semantic-ui-react'

const StepExampleEvenlyDivided = () => (
  <StepGroup widths={3}>
    <Step>
      <Icon name='truck' />
      <StepContent>
        <StepTitle>Shipping</StepTitle>
      </StepContent>
    </Step>
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

export default StepExampleEvenlyDivided
