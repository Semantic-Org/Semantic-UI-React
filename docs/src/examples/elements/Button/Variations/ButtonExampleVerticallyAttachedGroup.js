import React from 'react'
import { ButtonGroup, Button, Segment } from 'semantic-ui-react'

const ButtonExampleVerticallyAttachedGroup = () => (
  <div>
    <ButtonGroup attached='top'>
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
    <Segment attached>
      <img src='/images/wireframe/paragraph.png' />
    </Segment>
    <ButtonGroup attached='bottom'>
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  </div>
)

export default ButtonExampleVerticallyAttachedGroup
