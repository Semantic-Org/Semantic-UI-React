import React from 'react'
import { Step } from 'stardust'

const { Description, Group, Title } = Step

const StepDescriptionExample = () => (
  <div>
    <Group>
      <Step>
        <Title>Shipping</Title>
        <Description>Choose your shipping options</Description>
      </Step>
    </Group>

    <br />

    <Group>
      <Step title='Shipping' description='Choose your shipping options' />
    </Group>
  </div>
)

export default StepDescriptionExample
