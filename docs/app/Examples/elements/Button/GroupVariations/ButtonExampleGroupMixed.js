import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleGroupMixed = () => (
  <Button.Group>
    <Button labelPosition='left' icon='left chevron' content='Back' />
    <Button icon='stop' content='Stop' />
    <Button labelPosition='right' icon='right chevron' content='Forward' />
  </Button.Group>
)

export default ButtonExampleGroupMixed
