import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleLeftActionLabeledButton = () => (
  <Input
    action={{
      color: 'teal',
      labelPosition: 'left',
      icon: 'cart',
      content: 'Checkout',
    }}
    actionPosition='left'
    placeholder='Search...'
    defaultValue='52.03'
  />
)

export default InputExampleLeftActionLabeledButton
