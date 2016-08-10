import React from 'react'
import { Step } from 'stardust'

const steps = [
  { icon: 'truck', title: 'Shipping', description: 'Choose your shipping options' },
  { active: true, icon: 'payment', title: 'Billing', description: 'Enter billing information' },
  { disabled: true, icon: 'info', title: 'Confirm Order', description: 'Verify order details' },
]
const simpleSteps = [
  { icon: 'truck', title: 'Shipping' },
  { active: true, icon: 'payment', title: 'Billing' },
]

const Sizes = () => (
  <div>
    <Step.Group size='mini' items={steps} />
    <br />

    <Step.Group size='tiny' items={steps} />
    <br />

    <Step.Group size='small' items={steps} />
    <br />

    <Step.Group size='large' items={simpleSteps} />
    <br />

    <Step.Group size='big' items={simpleSteps} />
    <br />

    <Step.Group size='huge' items={simpleSteps} />
    <br />

    <Step.Group size='massive' items={simpleSteps} />
  </div>
)

export default Sizes
