import React from 'react'
import { Button } from 'stardust'

const ButtonGroupMixedExample = () => (
  <Button.Group>
    <Button labeled icon='left chevron' content='Back' />
    <Button icon='stop' content='Stop' />
    <Button labeled='right' icon='left chevron' content='Forward' />
  </Button.Group>
)

export default ButtonGroupMixedExample
