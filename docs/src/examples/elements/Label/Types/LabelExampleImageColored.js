import React from 'react'
import { LabelDetail, Label } from 'semantic-ui-react'

const LabelExampleImage = () => (
  <div>
    <Label as='a' color='blue' image>
      <img src='/images/avatar/small/veronika.jpg' />
      Veronika
      <LabelDetail>Friend</LabelDetail>
    </Label>
    <Label as='a' color='teal' image>
      <img src='/images/avatar/small/jenny.jpg' />
      Jenny
      <LabelDetail>Friend</LabelDetail>
    </Label>
    <Label as='a' color='yellow' image>
      <img src='/images/avatar/small/christian.jpg' />
      Christian
      <LabelDetail>Co-worker</LabelDetail>
    </Label>
  </div>
)

export default LabelExampleImage
