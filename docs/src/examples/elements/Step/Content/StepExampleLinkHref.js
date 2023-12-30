import React from 'react'
import {
  StepTitle,
  StepGroup,
  StepDescription,
  StepContent,
  Icon,
  Step,
} from 'semantic-ui-react'

const StepExampleLinkHref = () => (
  <StepGroup>
    <Step active href='http://example.com'>
      <Icon name='truck' />
      <StepContent>
        <StepTitle>Shipping</StepTitle>
        <StepDescription>Choose your shipping options</StepDescription>
      </StepContent>
    </Step>
    <Step href='http://example.com'>
      <Icon name='credit card' />
      <StepContent>
        <StepTitle>Billing</StepTitle>
        <StepDescription>Enter billing information</StepDescription>
      </StepContent>
    </Step>
  </StepGroup>
)

export default StepExampleLinkHref
