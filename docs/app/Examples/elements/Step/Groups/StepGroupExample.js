import React from 'react'
import { Icon, Step } from 'stardust'

const steps = [
  { icon: 'truck', title: 'Shipping', description: 'Choose your shipping options' },
  { active: true, icon: 'payment', title: 'Billing', description: 'Enter billing information' },
  { disabled: true, icon: 'info', title: 'Confirm Order' },
]

const StepGroupExample = () => (
  <div>
    <Step.Group>
      <Step>
        <Icon name='truck' />
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>
      <Step active icon='payment' title='Billing' description='Enter billing information' />
      <Step disabled icon='info' title='Confirm Order' />
    </Step.Group>

    <br />

    <Step.Group items={steps} />
  </div>
)

export default StepGroupExample
