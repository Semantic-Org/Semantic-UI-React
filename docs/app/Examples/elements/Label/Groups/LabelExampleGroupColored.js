import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

const LabelExampleGroupSize = () => (
  <Label.Group color='blue'>
    <Label as='a'>
      Fun
      <Icon name='close' />
    </Label>
    <Label as='a'>
      Happy
      <Label.Detail>22</Label.Detail>
    </Label>
    <Label as='a'>Smart</Label>
    <Label as='a'>Insane</Label>
    <Label as='a'>Exciting</Label>
  </Label.Group>
)

export default LabelExampleGroupSize
