import React from 'react'
import { Step } from 'semantic-ui-react'

const steps = [
  {
    key: 'shipping',
    icon: 'truck',
    title: 'Shipping',
    description: 'Choose your shipping options',
  },
  {
    key: 'billing',
    active: true,
    icon: 'payment',
    title: 'Billing',
    description: 'Enter billing information',
  },
  { key: 'confirm', disabled: true, icon: 'info', title: 'Confirm Order' },
]

const StepExampleGroupShorthand = () => <Step.Group items={steps} />

export default StepExampleGroupShorthand
