import React from 'react'
import { Step } from 'stardust'

const { Content, Description, Group, Title } = Step
const steps = [
  { completed: true, title: 'Shipping', description: 'Choose your shipping options' },
  { completed: true, title: 'Billing', description: 'Enter billing information' },
  { active: true, title: 'Confirm Order', description: 'Verify order details' },
]

const Ordered = () => (
  <div>
    <Group ordered>
      <Step completed>
        <Content>
          <Title>Shipping</Title>
          <Description>Choose your shipping options</Description>
        </Content>
      </Step>

      <Step completed title='Billing' description='Enter billing information' />

      <Step active title='Confirm Order' description='Verify order details' />
    </Group>

    <br />

    <Group ordered items={steps} />
  </div>
)

export default Ordered
