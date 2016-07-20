import React from 'react'
import { Step } from 'stardust'

const StepCompletedExample = () => (
  <div>
    <Step.Group>
      <Step completed icon='payment' title='Billing' description='Enter billing information' />
    </Step.Group>

    <br />

    <Step.Group ordered>
      <Step completed title='Billing' description='Enter billing information' />
    </Step.Group>
  </div>
)

export default StepCompletedExample
