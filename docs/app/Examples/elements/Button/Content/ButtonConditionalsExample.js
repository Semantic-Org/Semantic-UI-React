import React from 'react'
import { Button } from 'stardust'

const ButtonConditionalsExample = () => (
  <Button.Group>
    <Button>Cancel</Button>
    <Button.Or />
    <Button positive>Save</Button>
  </Button.Group>
)

export default ButtonConditionalsExample
