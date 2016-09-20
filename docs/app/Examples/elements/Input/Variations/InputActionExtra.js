import React from 'react'
import { Button, Input } from 'stardust'

const action = (
  <Button labeled color='teal' icon='cart'>
    Checkout
  </Button>
)

const InputActionExtra = () => (
  <Input action={action} actionPosition='left' placeholder='$23.43' />
)

export default InputActionExtra
