import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

const ButtonExampleVerticallyAttached = () => (
  <div>
    <Button attached='top'>Top</Button>
    <Segment attached>
      <img src='/images/wireframe/paragraph.png' />
    </Segment>
    <Button attached='bottom'>Bottom</Button>
  </div>
)

export default ButtonExampleVerticallyAttached
