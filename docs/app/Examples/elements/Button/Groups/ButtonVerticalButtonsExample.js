import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonVerticalButtonsExample extends Component {
  render() {
    return (
      <Button.Group vertical>
        <Button>Feed</Button>
        <Button>Messages</Button>
        <Button>Events</Button>
        <Button>Photos</Button>
      </Button.Group>
    )
  }
}
