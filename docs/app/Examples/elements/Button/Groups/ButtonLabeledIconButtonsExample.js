import React from 'react'
import { Button } from 'stardust'

const ButtonLabeledIconButtonsExample = () => (
  <Button.Group vertical labeled>
    <Button icon='save'>Pause</Button>
    <Button icon='play'>Play</Button>
    <Button icon='shuffle'>Shuffle</Button>
  </Button.Group>
)

export default ButtonLabeledIconButtonsExample
