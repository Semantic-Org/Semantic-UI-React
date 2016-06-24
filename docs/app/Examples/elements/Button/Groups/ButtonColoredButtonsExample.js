import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonColoredButtonsExample extends Component {
  render() {
    return (
      <Button.Group color='blue'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>
    )
  }
}
