import React from 'react'
import { Button } from 'stardust'

const ButtonConditionalsExample = () => (
  <Button.Group>
    <Button>Cancel</Button>
    <div className='or' />
    <Button positive>Save</Button>
  </Button.Group>
)

export default ButtonConditionalsExample
