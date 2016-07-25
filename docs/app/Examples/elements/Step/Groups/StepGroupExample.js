import React from 'react'
import { Step } from 'stardust'

const steps = [
  { icon: 'truck', title: 'Shipping', description: 'Choose your shipping options' },
  { active: true, icon: 'payment', title: 'Billing', description: 'Enter billing information' },
  { disabled: true, icon: 'info', title: 'Confirm Order' },
]

const StepGroupExample = () => (
  <div>
    <Step.Group>
      <Step icon='truck'>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
      </Step>
      <Step active icon='payment' title='Billing' description='Enter billing information' />
      <Step disabled icon='info' title='Confirm Order' />
    </Step.Group>

    <br />

    <Step.Group items={steps} />
  </div>
)

export default StepGroupExample
