import React from 'react'
import { Icon, Step } from 'stardust'

const { Content, Description, Group, Title } = Step
const steps = [
  { completed: true, icon: 'truck', title: 'Shipping', description: 'Choose your shipping options' },
  { completed: true, icon: 'credit card', title: 'Billing', description: 'Enter billing information' },
  { active: true, icon: 'info', title: 'Confirm Order', description: 'Verify order details' },
]

const Vertical = () => (
  <div>
    <Group vertical>
      <Step completed>
        <Icon name='truck' />
        <Content>
          <Title>Shipping</Title>
          <Description>Choose your shipping options</Description>
        </Content>
      </Step>

      <Step completed>
        <Icon name='credit card' />
        <Content title='Billing' description='Enter billing information' />
      </Step>

      <Step active icon='info' title='Confirm Order' description='Verify order details' />
    </Group>

    <br />

    <Group vertical items={steps} />
  </div>
)

export default Vertical
