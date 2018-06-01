import React from 'react'
import { Icon, Label, Menu } from 'semantic-ui-react'

const LabelExampleFloating = () => (
  <Menu compact>
    <Menu.Item as='a'>
      <Icon name='mail' /> Messages
      <Label color='red' floating>
        22
      </Label>
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='users' /> Friends
      <Label color='teal' floating>
        22
      </Label>
    </Menu.Item>
  </Menu>
)

export default LabelExampleFloating
