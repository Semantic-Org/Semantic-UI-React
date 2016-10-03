import React from 'react'
import { Label } from 'stardust'

const LabelExampleImage = () => (
  <div>
    <Label as='a' image>
      <img src='http://semantic-ui.com/images/avatar/small/joe.jpg' />
      Joe
    </Label>
    <Label as='a' image>
      <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
        Elliot
    </Label>
      <Label as='a' image>
      <img src='http://semantic-ui.com/images/avatar/small/stevie.jpg' />
        Stevie
    </Label>
  </div>
)

export default LabelExampleImage
