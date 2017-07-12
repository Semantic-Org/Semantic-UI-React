import React from 'react'
import { Step } from 'semantic-ui-react'

const steps = [
  { completed: true, title: 'Shipping', description: 'Choose your shipping options' },
  { completed: true, title: 'Billing', description: 'Enter billing information' },
  { active: true, title: 'Confirm Order', description: 'Verify order details' },
]

const StepExampleOrdered = () => (
  <div>
    <Step.Group ordered>
      <Step completed>
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>

      <Step completed title='Billing' description='Enter billing information' />

      <Step active title='Confirm Order' description='Verify order details' />
    </Step.Group>

    <br />

    <Step.Group ordered items={steps} />
  </div>
)

export default StepExampleOrdered
