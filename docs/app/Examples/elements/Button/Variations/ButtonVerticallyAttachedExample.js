import React from 'react'
import { Button, Segment } from 'stardust'

const ButtonVerticallyAttachedExample = () => (
  <div>
    <Button attached='top'>Top</Button>
    <Segment attached>
      <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>
    <Button attached='bottom'>Bottom</Button>
  </div>
)

export default ButtonVerticallyAttachedExample
