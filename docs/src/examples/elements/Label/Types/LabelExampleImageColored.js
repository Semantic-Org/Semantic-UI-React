import React from 'react'
import { Label } from 'semantic-ui-react'

const LabelExampleImage = () => (
  <div>
    <Label as='a' color='blue' image>
      <img src='/assets/images/avatar/small/veronika.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='teal' image>
      <img src='/assets/images/avatar/small/jenny.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='yellow' image>
      <img src='/assets/images/avatar/small/christian.jpg' />
      Helen
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
  </div>
)

export default LabelExampleImage
