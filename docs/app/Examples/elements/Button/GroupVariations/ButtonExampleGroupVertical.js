import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleGroupVertical = () => (
  <Button.Group attached='top' vertical>
    <Button>Feed</Button>
    <Button>Messages</Button>
    <Button>Events</Button>
    <Button>Photos</Button>
  </Button.Group>
)

export default ButtonExampleGroupVertical
