import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const DropdownExamplePointingTwo = () => (
  <Menu vertical>
    <Menu.Item>Home</Menu.Item>
    <Dropdown text='Messages' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Inbox</Dropdown.Item>
        <Dropdown.Item>Starred</Dropdown.Item>
        <Dropdown.Item>Sent Mail</Dropdown.Item>
        <Dropdown.Item>Drafts (143)</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Spam (1009)</Dropdown.Item>
        <Dropdown.Item>Trash</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>Browse</Menu.Item>
    <Menu.Item>Help</Menu.Item>
  </Menu>
)

export default DropdownExamplePointingTwo
