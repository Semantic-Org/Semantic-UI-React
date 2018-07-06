import React from 'react'
import { Label } from 'semantic-ui-react'

const LabelExampleBasic = () => (
  <div>
    <Label as='a' basic>
      Basic
    </Label>
    <Label as='a' basic pointing>
      Pointing
    </Label>
    <Label as='a' basic image>
      <img src='/images/avatar/small/elliot.jpg' />
      Elliot
    </Label>
    <Label as='a' basic color='red' pointing>
      Red Pointing
    </Label>
    <Label as='a' basic color='blue'>
      Blue
    </Label>
  </div>
)

export default LabelExampleBasic
