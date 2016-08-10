import React from 'react'
import { Icon, Step } from 'stardust'

const { Content, Description, Group, Title } = Step
const steps = [
  { icon: 'truck', title: 'Shipping', description: 'Choose your shipping options' },
  { active: true, icon: 'payment', title: 'Billing', description: 'Enter billing information' },
  { disabled: true, icon: 'info', title: 'Confirm Order' },
]

const Groups = () => (
  <div>
    <Group>
      <Step>
        <Icon name='truck' />
        <Content>
          <Title>Shipping</Title>
          <Description>Choose your shipping options</Description>
        </Content>
      </Step>

      <Step active>
        <Icon name='payment' />
        <Content title='Billing' description='Enter billing information' />
      </Step>

      <Step disabled icon='info' title='Confirm Order' />
    </Group>

    <br />

    <Group items={steps} />
  </div>
)

export default Groups
