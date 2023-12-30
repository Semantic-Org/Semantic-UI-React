import React from 'react'
import {
  StepTitle,
  StepGroup,
  StepDescription,
  StepContent,
  Icon,
  Step,
} from 'semantic-ui-react'

const StepExampleStackable = () => (
  <StepGroup stackable='tablet'>
    <Step>
      <Icon name='plane' />
      <StepContent>
        <StepTitle>Shipping</StepTitle>
        <StepDescription>Choose your shipping options</StepDescription>
      </StepContent>
    </Step>
    <Step active>
      <Icon name='dollar' />
      <StepContent>
        <StepTitle>Billing</StepTitle>
        <StepDescription>Enter billing information</StepDescription>
      </StepContent>
    </Step>
    <Step disabled>
      <Icon name='info circle' />
      <StepContent>
        <StepTitle>Confirm Order</StepTitle>
        <StepDescription>Verify order details</StepDescription>
      </StepContent>
    </Step>
  </StepGroup>
)

export default StepExampleStackable
