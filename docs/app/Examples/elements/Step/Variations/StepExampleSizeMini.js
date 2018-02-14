import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleSizeMini = () => (
  <Step.Group size='mini'>
    <Step>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step disabled>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
        <Step.Description>Verify order details</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleSizeMini
