import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const DropdownExampleFluid = () => (
  <Menu vertical>
    <Menu.Item as='a'>Link 1</Menu.Item>
    <Menu.Item as='a'>Link 2</Menu.Item>
    <Menu.Item header>All Sections</Menu.Item>
    <Menu.Item>
      <Dropdown text='More' fluid selection>
        <Dropdown.Menu>
          <Dropdown.Item>Choice 1</Dropdown.Item>
          <Dropdown.Item>Choice 2</Dropdown.Item>
          <Dropdown.Item>Choice 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  </Menu>
)

export default DropdownExampleFluid
