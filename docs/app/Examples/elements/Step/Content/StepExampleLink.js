import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleLink = () => (
  <Step.Group>
    <Step link>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step link>
      <Icon name='credit card' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleLink
