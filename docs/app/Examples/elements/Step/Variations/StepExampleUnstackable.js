import React from 'react'
import { Step } from 'semantic-ui-react'

const StepExampleUnstackable = () => (
  <Step.Group unstackable>
    <Step icon='plane' title='Shipping' description='Choose your shipping options' />
    <Step active icon='dollar' title='Billing' description='Enter billing information' />
    <Step disabled icon='info circle' title='Confirm Order' description='Verify order details' />
  </Step.Group>
)

export default StepExampleUnstackable
