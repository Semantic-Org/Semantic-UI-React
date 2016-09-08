import React from 'react'
import { Button, Segment } from 'stardust'

const ButtonVerticallyAttachedExample = () => (
  <div>
    <Button.Group attached='top'>
      <Button>One</Button>
      <Button>Two</Button>
    </Button.Group>
    <Segment attached>
      <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>
    <Button.Group attached='bottom'>
      <Button>One</Button>
      <Button>Two</Button>
    </Button.Group>
  </div>
)

export default ButtonVerticallyAttachedExample
