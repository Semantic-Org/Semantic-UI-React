import React from 'react'
import { Button, Icon, Label } from 'stardust'

const ButtonLabeledExample = () => (
  <div>
    <Button labeled>
      <Button>
        <Icon name='heart' /> Like
      </Button>
      <Label basic link>2,048</Label>
    </Button>

    <Button labeled='left'>
      <Label basic pointing='right' link>2,048</Label>
      <Button>
        <Icon name='heart' /> Like
      </Button>
    </Button>

    <Button labeled='left'>
      <Label basic link>2,048</Label>
      <Button icon>
        <Icon name='fork' />
      </Button>
    </Button>
  </div>
)

export default ButtonLabeledExample
