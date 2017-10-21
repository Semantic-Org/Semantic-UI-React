import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleActive = () => (
  <Step.Group>
    <Step active>
      <Icon name='credit card' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleActive
