import React from 'react'
import { ButtonOr, ButtonGroup, Button } from 'semantic-ui-react'

const ButtonExampleMultipleConditionals = () => (
  <ButtonGroup>
    <Button>One</Button>
    <ButtonOr />
    <Button>Two</Button>
    <ButtonOr />
    <Button>Three</Button>
  </ButtonGroup>
)

export default ButtonExampleMultipleConditionals
