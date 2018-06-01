import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleGroupIcon = () => (
  <div>
    <Button.Group>
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
    </Button.Group>{' '}
    <Button.Group>
      <Button icon>
        <Icon name='bold' />
      </Button>
      <Button icon>
        <Icon name='underline' />
      </Button>
      <Button icon>
        <Icon name='text width' />
      </Button>
    </Button.Group>
  </div>
)

export default ButtonExampleGroupIcon
