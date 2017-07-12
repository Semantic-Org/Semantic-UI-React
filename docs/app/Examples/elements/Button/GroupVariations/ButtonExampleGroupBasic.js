import React from 'react'
import { Button, Divider } from 'semantic-ui-react'

const ButtonExampleGroupBasic = () => (
  <div>
    <Button.Group basic>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
    <Divider />
    <Button.Group basic vertical>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </Button.Group>
  </div>
)

export default ButtonExampleGroupBasic
