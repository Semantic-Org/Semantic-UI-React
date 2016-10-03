import React from 'react'
import { Label } from 'stardust'

const LabelExampleBasic = () => (
  <div>
    <Label as='a' basic>Basic</Label>
    <Label as='a' basic pointing>Pointing</Label>
    <Label as='a' basic image>
      <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
      Elliot
    </Label>
    <Label as='a' basic color='red' pointing>Red Pointing</Label>
    <Label as='a' basic color='blue'>Blue</Label>
  </div>
)

export default LabelExampleBasic
