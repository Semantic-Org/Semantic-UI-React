import React from 'react'
import { Dropdown, Menu } from 'stardust'

const DropdownItem = () => {
  return (
    <Menu vertical>
      <Dropdown as={Menu.Item} text='Categories'>
        <Dropdown.Menu>
          <Dropdown.Item>Electronics</Dropdown.Item>
          <Dropdown.Item>Automotive</Dropdown.Item>
          <Dropdown.Item>Home</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  )
}

export default DropdownItem
