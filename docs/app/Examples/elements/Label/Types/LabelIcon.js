import React from 'react'
import { Icon, Label } from 'stardust'

const LabelIcon = () => (
  <div>
    <Label image>
      <img src='http://semantic-ui.com/images/avatar/small/ade.jpg' />
        Adrienne
        <Icon name='delete' />
    </Label>
      <Label image>
      <img src='http://semantic-ui.com/images/avatar/small/zoe.jpg' />
        Zoe
        <Icon name='delete' />
    </Label>
    <Label image>
      <img src='http://semantic-ui.com/images/avatar/small/nan.jpg' />
        Nan
      <Icon name='delete' />
    </Label>
  </div>
)

export default LabelIcon
