import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonGroupIconExample = () => (
  <Button.Group icon>
    <Button>
      <Icon name='play' />
    </Button>
    <Button>
      <Icon name='pause' />
    </Button>
    <Button>
      <Icon name='shuffle' />
    </Button>
  </Button.Group>
)

export default ButtonGroupIconExample
