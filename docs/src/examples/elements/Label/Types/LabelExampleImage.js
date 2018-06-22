import React from 'react'
import { Label } from 'semantic-ui-react'

const LabelExampleImage = () => (
  <div>
    <Label as='a' image>
      <img src='/images/avatar/small/joe.jpg' />
      Joe
    </Label>
    <Label as='a' image>
      <img src='/images/avatar/small/elliot.jpg' />
      Elliot
    </Label>
    <Label as='a' image>
      <img src='/images/avatar/small/stevie.jpg' />
      Stevie
    </Label>
  </div>
)

export default LabelExampleImage
