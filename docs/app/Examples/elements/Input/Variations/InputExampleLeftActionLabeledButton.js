import React from 'react'
import { Input } from 'stardust'

const InputExampleLeftActionLabeledButton = () => (
  <Input
    action={{ color: 'teal', labeled: true, icon: 'cart', content: 'Checkout' }}
    actionPosition='left'
    placeholder='Search...'
    defaultValue='52.03'
  />
)

export default InputExampleLeftActionLabeledButton
