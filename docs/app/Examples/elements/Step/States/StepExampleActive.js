import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const { Content, Description, Group, Title } = Step

const StepExampleActive = () => (
  <Group>
    <Step active>
      <Icon name='credit card' />
      <Content>
        <Title>Billing</Title>
        <Description>Enter billing information</Description>
      </Content>
    </Step>

    <Step active icon='credit card' title='Billing' description='Enter billing information' />
  </Group>
)

export default StepExampleActive
