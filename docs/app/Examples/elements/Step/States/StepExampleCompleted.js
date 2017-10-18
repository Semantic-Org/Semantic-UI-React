import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleCompleted = () => (
  <Step.Group>
    <Step completed>
      <Icon name='credit card' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleCompleted
