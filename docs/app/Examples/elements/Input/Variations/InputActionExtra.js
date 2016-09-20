import React from 'react'
import { Button, Input } from 'stardust'

const actions = [
  <Button childKey='button' labeled color='teal' icon='cart'>
    Checkout
  </Button>,
]

const InputActionExtra = () => (
  <Input actions={actions} actionsPosition='left' placeholder='$23.43' />
)

export default InputActionExtra
