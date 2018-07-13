import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleSizeMassive = () => (
  <Step.Group size='massive'>
    <Step>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleSizeMassive
