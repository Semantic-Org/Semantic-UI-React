import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonLabeledIconButtonsExample extends Component {
  render() {
    return (
      <Button.Group vertical labeled='icon'>
        <Button icon='save'>Pause</Button>
        <Button icon='play'>Play</Button>
        <Button icon='shuffle'>Shuffle</Button>
      </Button.Group>
    )
  }
}
