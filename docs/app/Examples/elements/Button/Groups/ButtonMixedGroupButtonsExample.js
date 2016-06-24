import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonMixedGroupButtonsExample extends Component {
  render() {
    return (
      <Button.Group>
        <Button labeled='icon'>Feed</Button>
        <Button>Messages</Button>
        <Button>Events</Button>
        <Button>Photos</Button>
      </Button.Group>
    )
  }
}
