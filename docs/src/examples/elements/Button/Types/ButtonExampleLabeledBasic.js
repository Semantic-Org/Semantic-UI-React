import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const ButtonExampleLabeledBasic = () => (
  <div>
    <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
    <Button as='div' labelPosition='right'>
      <Button basic color='blue'>
        <Icon name='fork' />
        Fork
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        2,048
      </Label>
    </Button>
  </div>
)

export default ButtonExampleLabeledBasic
