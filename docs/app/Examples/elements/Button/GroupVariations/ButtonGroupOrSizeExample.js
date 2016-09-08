import React from 'react'
import { Button } from 'stardust'

const ButtonGroupOrSizeExample = () => (
  <Button.Group size='large'>
    <Button>One</Button>
    <div className='or' />
    <Button>Three</Button>
  </Button.Group>
)

export default ButtonGroupOrSizeExample
