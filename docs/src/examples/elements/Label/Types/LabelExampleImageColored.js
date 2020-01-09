import React from 'react'
import { Label } from 'semantic-ui-react'

const LabelExampleImage = () => (
  <div>
    <Label as='a' color='blue' image>
      <img src='/images/avatar/small/veronika.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='teal' image>
      <img src='/images/avatar/small/jenny.jpg' />
      Jenny
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='yellow' image>
      <img src='/images/avatar/small/christian.jpg' />
      Christian
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
  </div>
)

export default LabelExampleImage
