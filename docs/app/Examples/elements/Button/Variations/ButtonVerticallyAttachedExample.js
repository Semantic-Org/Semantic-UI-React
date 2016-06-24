import React, { Component } from 'react'
import { Button, Segment } from 'stardust'

export default class ButtonVerticallyAttachedExample extends Component {
  render() {
    return (
      <div>
        <Button attached='top'>Top</Button>
        <Segment attached>
          <p>Content goes here</p>
        </Segment>
        <Button attached='bottom'>Bottom</Button>
      </div>
      // TODO: Extend button component to work with an attached div - see issue #46
    )
  }
}
