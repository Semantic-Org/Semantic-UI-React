import React from 'react'
import { DropdownMenu, DropdownItem, Dropdown, Menu } from 'semantic-ui-react'

const MenuExampleDropdownItem = () => (
  <Menu vertical>
    <Dropdown item text='Categories'>
      <DropdownMenu>
        <DropdownItem>Electronics</DropdownItem>
        <DropdownItem>Automotive</DropdownItem>
        <DropdownItem>Home</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </Menu>
)

export default MenuExampleDropdownItem
