import React from 'react'
import { MenuItem, Icon, Label, Menu } from 'semantic-ui-react'

const LabelExampleFloating = () => (
  <Menu compact>
    <MenuItem as='a'>
      <Icon name='mail' /> Messages
      <Label color='red' floating>
        22
      </Label>
    </MenuItem>
    <MenuItem as='a'>
      <Icon name='users' /> Friends
      <Label color='teal' floating>
        22
      </Label>
    </MenuItem>
  </Menu>
)

export default LabelExampleFloating
