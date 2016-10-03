import React from 'react'
import { Label } from 'semantic-ui-react'

const LabelExampleGroupTag = () => (
  <Label.Group tag>
    <Label as='a'>$10.00</Label>
    <Label as='a'>$19.99</Label>
    <Label as='a'>$24.99</Label>
    <Label as='a'>$30.99</Label>
    <Label as='a'>$10.25</Label>
  </Label.Group>
)

export default LabelExampleGroupTag
