import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const { Content, Description, Group, Title } = Step

const Icons = () => (
  <Group>
    <Step>
      <Icon name='truck' />
      <Content>
        <Title>Shipping</Title>
        <Description>Choose your shipping options</Description>
      </Content>
    </Step>

    <Step>
      <Icon name='truck' />
      <Content title='Shipping' description='Choose your shipping options' />
    </Step>

    <Step icon='truck' title='Shipping' description='Choose your shipping options' />
  </Group>
)

export default Icons
