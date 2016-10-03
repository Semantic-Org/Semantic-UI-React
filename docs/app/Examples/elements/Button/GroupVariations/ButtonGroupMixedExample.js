import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonGroupMixedExample = () => (
  <Button.Group>
    <Button labeled icon='left chevron' content='Back' />
    <Button icon='stop' content='Stop' />
    <Button labeled='right' icon='left chevron' content='Forward' />
  </Button.Group>
)

export default ButtonGroupMixedExample
