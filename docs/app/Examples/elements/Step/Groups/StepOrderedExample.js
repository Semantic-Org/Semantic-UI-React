import React from 'react'
import { Step } from 'stardust'

const { Description, Group, Title } = Step
const steps = [
  { completed: true, title: 'Shipping', description: 'Choose your shipping options' },
  { completed: true, title: 'Billing', description: 'Enter billing information' },
  { active: true, title: 'Confirm Order', description: 'Verify order details' },
]

const StepOrderedExample = () => (
  <div>
    <Group ordered>
      <Step completed>
        <Title>Shipping</Title>
        <Description>Choose your shipping options</Description>
      </Step>
      <Step completed title='Billing' description='Enter billing information' />
      <Step active title='Confirm Order' description='Verify order details' />
    </Group>

    <br />

    <Group ordered items={steps} />
  </div>
)

export default StepOrderedExample
