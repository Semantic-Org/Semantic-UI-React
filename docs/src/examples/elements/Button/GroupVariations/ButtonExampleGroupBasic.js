import React from 'react'
import { ButtonGroup, Button, Divider } from 'semantic-ui-react'

const ButtonExampleGroupBasic = () => (
  <div>
    <ButtonGroup basic>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Divider />
    <ButtonGroup basic vertical>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </div>
)

export default ButtonExampleGroupBasic
