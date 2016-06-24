import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonIconButtonsExample extends Component {
  render() {
    return (
      <Button.Group icon>
        <Button icon='save' />
        <Button icon='delete' />
        <Button icon='edit' />
      </Button.Group>
    )
  }
}
