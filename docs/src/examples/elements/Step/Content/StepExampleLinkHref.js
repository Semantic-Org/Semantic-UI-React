import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleLinkHref = () => (
  <Step.Group>
    <Step active href='http://example.com'>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step href='http://example.com'>
      <Icon name='credit card' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleLinkHref
