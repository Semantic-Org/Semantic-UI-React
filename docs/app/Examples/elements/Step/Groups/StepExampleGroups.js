import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const steps = [
  { icon: 'truck', title: 'Shipping', description: 'Choose your shipping options' },
  { active: true, icon: 'payment', title: 'Billing', description: 'Enter billing information' },
  { disabled: true, icon: 'info', title: 'Confirm Order' },
]

const StepExampleGroups = () => (
  <div>
    <Step.Group>
      <Step>
        <Icon name='truck' />
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>

      <Step active>
        <Icon name='payment' />
        <Step.Content title='Billing' description='Enter billing information' />
      </Step>

      <Step disabled icon='info' title='Confirm Order' />
    </Step.Group>

    <br />

    <Step.Group items={steps} />
  </div>
)

export default StepExampleGroups
