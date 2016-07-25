import React from 'react'
import { Step } from 'stardust'

const { Description, Group, Title } = Step
const steps = [
  { completed: true, icon: 'truck', title: 'Shipping', description: 'Choose your shipping options' },
  { completed: true, icon: 'credit card', title: 'Billing', description: 'Enter billing information' },
  { active: true, icon: 'info', title: 'Confirm Order', description: 'Verify order details' },
]

const StepVerticalExample = () => (
  <div>
    <Group vertical>
      <Step completed icon='truck'>
          <Title>Shipping</Title>
          <Description>Choose your shipping options</Description>
      </Step>
      <Step completed icon='credit card'>
        <Title>Billing</Title>
        <Description>Enter billing information</Description>
      </Step>
      <Step active icon='info' title='Confirm Order' description='Verify order details' />
    </Group>

    <br />

    <Group vertical items={steps} />
  </div>
)

export default StepVerticalExample
