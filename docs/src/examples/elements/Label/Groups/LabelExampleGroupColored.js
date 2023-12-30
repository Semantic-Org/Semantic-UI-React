import React from 'react'
import { LabelGroup, LabelDetail, Icon, Label } from 'semantic-ui-react'

const LabelExampleGroupSize = () => (
  <LabelGroup color='blue'>
    <Label as='a'>
      Fun
      <Icon name='close' />
    </Label>
    <Label as='a'>
      Happy
      <LabelDetail>22</LabelDetail>
    </Label>
    <Label as='a'>Smart</Label>
    <Label as='a'>Insane</Label>
    <Label as='a'>Exciting</Label>
  </LabelGroup>
)

export default LabelExampleGroupSize
