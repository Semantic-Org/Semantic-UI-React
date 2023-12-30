import React from 'react'
import {
  StepTitle,
  StepGroup,
  StepDescription,
  StepContent,
  Icon,
  Image,
  Segment,
  Step,
} from 'semantic-ui-react'

const StepExampleAttached = () => (
  <div>
    <StepGroup attached='top'>
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

    <Segment attached>
      <Image src='/images/wireframe/paragraph.png' />
    </Segment>

    <StepGroup attached='bottom'>
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
  </div>
)

export default StepExampleAttached
