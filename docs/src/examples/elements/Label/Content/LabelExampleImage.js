import React from 'react'
import { Image, Label } from 'semantic-ui-react'

const LabelExampleImage = () => (
  <div>
    <Label as='a'>
      <Image avatar spaced='right' src='/images/avatar/small/elliot.jpg' />
      Elliot
    </Label>
    <Label as='a'>
      <img src='/images/avatar/small/stevie.jpg' />
      Stevie
    </Label>
  </div>
)

export default LabelExampleImage
