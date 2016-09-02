import React from 'react'
import { Button, Segment } from 'stardust'

const ButtonVerticallyAttachedExample = () => (
  <div>
    <Button attached='top'>Top</Button>
    <Segment attached>
      <p>Content goes here</p>
    </Segment>
    <Button attached='bottom'>Bottom</Button>
  </div>
  // TODO: Extend button component to work with an attached div - see issue #46
)

export default ButtonVerticallyAttachedExample
