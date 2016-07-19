import React from 'react'
import { Step } from 'stardust'

const StepGroupExample = () => (
  <Step.Group>
    <Step icon='truck'>
      <Step.Title>Shipping</Step.Title>
      <Step.Description>Choose your shipping options</Step.Description>
    </Step>
    <Step active icon='payment' title='Billing' description='Enter billing information' />
    <Step disabled icon='info' title='Confirm Order' />
  </Step.Group>
)

export default StepGroupExample
