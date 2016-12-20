import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleIcons = () => (
  <Step.Group>
    <Step>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step>
      <Icon name='truck' />
      <Step.Content title='Shipping' description='Choose your shipping options' />
    </Step>

    <Step icon='truck' title='Shipping' description='Choose your shipping options' />
  </Step.Group>
)

export default StepExampleIcons
