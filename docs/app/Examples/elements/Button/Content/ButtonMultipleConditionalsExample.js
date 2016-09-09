import React from 'react'
import { Button } from 'stardust'

const ButtonMultipleConditionalsExample = () => (
  <Button.Group>
    <Button>One</Button>
    <Button.Or />
    <Button>Two</Button>
    <Button.Or />
    <Button>Three</Button>
  </Button.Group>
)

export default ButtonMultipleConditionalsExample
