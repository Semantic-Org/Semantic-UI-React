import React from 'react'
import { ButtonOr, ButtonGroup, Button } from 'semantic-ui-react'

const ButtonExampleGroupOrSize = () => (
  <ButtonGroup size='large'>
    <Button>One</Button>
    <ButtonOr />
    <Button>Three</Button>
  </ButtonGroup>
)

export default ButtonExampleGroupOrSize
