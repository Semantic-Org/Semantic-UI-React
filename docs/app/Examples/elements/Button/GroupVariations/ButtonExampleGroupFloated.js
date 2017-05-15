import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleGroupFloated = () => (
  <div>
    <Button.Group floated='left'>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
    <Button.Group floated='right'>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
  </div>
)

export default ButtonExampleGroupFloated
