import React from 'react'
import { Step } from 'semantic-ui-react'

const StepExampleCompletedOrdered = () => (
  <Step.Group ordered>
    <Step completed>
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleCompletedOrdered
