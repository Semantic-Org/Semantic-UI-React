import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const steps = [
  { completed: true, icon: 'truck', title: 'Shipping', description: 'Choose your shipping options' },
  { completed: true, icon: 'credit card', title: 'Billing', description: 'Enter billing information' },
  { active: true, icon: 'info', title: 'Confirm Order', description: 'Verify order details' },
]

const StepExampleVertical = () => (
  <div>
    <Step.Group vertical>
      <Step completed>
        <Icon name='truck' />
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>

      <Step completed>
        <Icon name='credit card' />
        <Step.Content title='Billing' description='Enter billing information' />
      </Step>

      <Step active icon='info' title='Confirm Order' description='Verify order details' />
    </Step.Group>

    <br />

    <Step.Group vertical items={steps} />
  </div>
)

export default StepExampleVertical
