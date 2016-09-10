import React from 'react'
import { Button, Icon, Label } from 'stardust'

const ButtonLabeledExample = () => (
  <div>
    <Button labeled>
      <Button color='red'>
        <Icon name='heart' /> Like
      </Button>
      <Label basic color='red' pointing='left'>2,048</Label>
    </Button>

    <Button labeled>
      <Button basic color='blue'>
        <Icon name='fork' /> Fork
      </Button>
      <Label as='a' basic color='blue' pointing='left'>1,048</Label>
    </Button>
  </div>
)

export default ButtonLabeledExample
