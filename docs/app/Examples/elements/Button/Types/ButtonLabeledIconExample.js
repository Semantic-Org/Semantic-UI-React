import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonLabeledIconExample = () => (
  <div>
    <Button labeled icon>
      <Icon name='pause' /> Pause
    </Button>
    <Button labeled='right' icon>
      <Icon name='right arrow' /> Next
    </Button>
  </div>
)

export default ButtonLabeledIconExample
