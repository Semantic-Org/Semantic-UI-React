import React, { Component } from 'react'
import { Button, Segment } from 'stardust'

export default class ButtonVerticallyAttachedExample extends Component {
  render() {
    return (
      <div>
        <Button className='top attached'>Top</Button>
        <Segment className='attached'>
          <p>Content goes here</p>
        </Segment>
        <Button className='bottom attached'>Bottom</Button>
      </div>
      // TODO: Extend button component to work with an attached div - see issue #46
    )
  }
}
