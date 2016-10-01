import React from 'react'
import { Label } from 'stardust'

const LabelExampleImage = () => (
  <div>
    <Label as='a' color='blue' image>
      <img src='http://semantic-ui.com/images/avatar/small/veronika.jpg' />
        Veronika
        <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='teal' image>
      <img src='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
        Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='yellow' image>
      <img src='http://semantic-ui.com/images/avatar/small/christian.jpg' />
        Helen
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
  </div>
)

export default LabelExampleImage
