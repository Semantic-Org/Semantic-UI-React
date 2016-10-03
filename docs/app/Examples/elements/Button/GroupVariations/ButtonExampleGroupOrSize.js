import React from 'react'
import { Button } from 'stardust'

const ButtonExampleGroupOrSize = () => (
  <Button.Group size='large'>
    <Button>One</Button>
    <Button.Or />
    <Button>Three</Button>
  </Button.Group>
)

export default ButtonExampleGroupOrSize
