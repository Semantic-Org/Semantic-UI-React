import React from 'react'
import { Dropdown, Icon } from 'stardust'

const trigger = (
  <span>
    <Icon name='user' />
    Hello, Bob
  </span>
)

const DropdownExample = () => (
  <Dropdown trigger={trigger}>
    <Dropdown.Menu>
      <Dropdown.Item disabled>
        <div>Signed In as Bob Smith</div>
        <strong>Bob Smith</strong>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Your Profile</Dropdown.Item>
      <Dropdown.Item>Your Stars</Dropdown.Item>
      <Dropdown.Item>Explore</Dropdown.Item>
      <Dropdown.Item>Integrations</Dropdown.Item>
      <Dropdown.Item>Help</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Sign Out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExample
