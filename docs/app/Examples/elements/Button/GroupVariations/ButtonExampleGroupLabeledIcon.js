import React from 'react'
import { Button } from 'stardust'

const ButtonExampleGroupLabeledIcon = () => (
  <Button.Group labeled>
    <Button icon='play' content='Play' />
    <Button icon='pause' content='Pause' />
    <Button icon='shuffle' content='Shuffle' />
  </Button.Group>
)

export default ButtonExampleGroupLabeledIcon
