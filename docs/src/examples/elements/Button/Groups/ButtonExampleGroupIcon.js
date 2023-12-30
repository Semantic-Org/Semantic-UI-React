import React from 'react'
import { ButtonGroup, Button, Icon } from 'semantic-ui-react'

const ButtonExampleGroupIcon = () => (
  <div>
    <ButtonGroup>
      <Button icon>
        <Icon name='align left' />
      </Button>
      <Button icon>
        <Icon name='align center' />
      </Button>
      <Button icon>
        <Icon name='align right' />
      </Button>
      <Button icon>
        <Icon name='align justify' />
      </Button>
    </ButtonGroup>{' '}
    <ButtonGroup>
      <Button icon>
        <Icon name='bold' />
      </Button>
      <Button icon>
        <Icon name='underline' />
      </Button>
      <Button icon>
        <Icon name='text width' />
      </Button>
    </ButtonGroup>
  </div>
)

export default ButtonExampleGroupIcon
