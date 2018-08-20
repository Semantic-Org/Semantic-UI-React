import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

const ButtonExampleVerticallyAttachedGroup = () => (
  <div>
    <Button.Group attached='top'>
      <Button>One</Button>
      <Button>Two</Button>
    </Button.Group>
    <Segment attached>
      <img src='/images/wireframe/paragraph.png' />
    </Segment>
    <Button.Group attached='bottom'>
      <Button>One</Button>
      <Button>Two</Button>
    </Button.Group>
  </div>
)

export default ButtonExampleVerticallyAttachedGroup
