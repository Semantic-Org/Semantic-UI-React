import React from 'react'
import { Dropdown, Menu } from 'stardust'

const DropdownItem = () => {
  return (
    <Menu vertical>
      <Menu.Item as={Dropdown} text='Categories'>
        <Dropdown.Menu>
          <Dropdown.Item>Electronics</Dropdown.Item>
          <Dropdown.Item>Automotive</Dropdown.Item>
          <Dropdown.Item>Home</Dropdown.Item>
        </Dropdown.Menu>
      </Menu.Item>
    </Menu>
  )
}

export default DropdownItem
