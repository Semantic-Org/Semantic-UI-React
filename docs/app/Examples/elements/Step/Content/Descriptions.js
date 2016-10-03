import React from 'react'
import { Step } from 'semantic-ui-react'

const { Description, Group, Title } = Step

const Descriptions = () => (
  <div>
    <Group>
      <Step>
        <Title>Shipping</Title>
        <Description>Choose your shipping options</Description>
      </Step>
    </Group>

    <br />

    <Group>
      <Step>
        <Title title='Shipping' />
        <Description description='Choose your shipping options' />
      </Step>
    </Group>

    <br />

    <Group>
      <Step title='Shipping' description='Choose your shipping options' />
    </Group>
  </div>
)

export default Descriptions
