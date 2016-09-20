import React from 'react'
import { Button, Input } from 'stardust'

const InputActionExtra = () => (
  <Input className='left action' placeholder='$23.43'>
    <Button labeled color='teal' icon='cart'>
      Checkout
    </Button>
  </Input>
)

export default InputActionExtra
