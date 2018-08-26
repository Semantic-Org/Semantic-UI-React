import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

const LabelExampleIcon = () => (
  <div>
    <Label image>
      <img src='/images/avatar/small/ade.jpg' />
      Adrienne
      <Icon name='delete' />
    </Label>
    <Label image>
      <img src='/images/avatar/small/zoe.jpg' />
      Zoe
      <Icon name='delete' />
    </Label>
    <Label image>
      <img src='/images/avatar/small/nan.jpg' />
      Nan
      <Icon name='delete' />
    </Label>
  </div>
)

export default LabelExampleIcon
