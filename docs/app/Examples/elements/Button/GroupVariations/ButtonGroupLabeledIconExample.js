import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonGroupLabeledIconExample = () => (
  <Button.Group labeled>
    <Button icon='play' content='Play' />
    <Button icon='pause' content='Pause' />
    <Button icon='shuffle' content='Shuffle' />
  </Button.Group>
)

export default ButtonGroupLabeledIconExample
