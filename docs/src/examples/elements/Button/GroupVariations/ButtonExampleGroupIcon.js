import React from 'react'
import { ButtonGroup, Button, Icon } from 'semantic-ui-react'

const ButtonExampleGroupIcon = () => (
  <ButtonGroup icon>
    <Button>
      <Icon name='play' />
    </Button>
    <Button>
      <Icon name='pause' />
    </Button>
    <Button>
      <Icon name='shuffle' />
    </Button>
  </ButtonGroup>
)

export default ButtonExampleGroupIcon
