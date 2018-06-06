import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleEvenlyDividedAnother = () => (
  <Step.Group widths={2}>
    <Step active>
      <Icon name='credit card' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
      </Step.Content>
    </Step>
    <Step disabled>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleEvenlyDividedAnother
