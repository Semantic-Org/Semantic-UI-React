import React from 'react'
import { Icon, Image, Segment, Step } from 'semantic-ui-react'

const StepExampleAttached = () => (
  <div>
    <Step.Group attached='top'>
      <Step>
        <Icon name='truck' />
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>

      <Step active>
        <Icon name='payment' />
        <Step.Content>
          <Step.Title>Billing</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>

      <Step disabled>
        <Icon name='info' />
        <Step.Content>
          <Step.Title>Confirm Order</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>

    <Segment attached>
      <Image src='/images/wireframe/paragraph.png' />
    </Segment>

    <Step.Group attached='bottom'>
      <Step>
        <Icon name='truck' />
        <Step.Content>
          <Step.Title>Shipping</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>

      <Step active>
        <Icon name='payment' />
        <Step.Content>
          <Step.Title>Billing</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>

      <Step disabled>
        <Icon name='info' />
        <Step.Content>
          <Step.Title>Confirm Order</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  </div>
)

export default StepExampleAttached
