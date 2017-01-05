import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const DropdownExampleSimple = () => (
  <Menu compact>
    <Dropdown simple text='Dropdown' className='item'>
      <Dropdown.Menu>
        <Dropdown.Item>Choice 1</Dropdown.Item>
        <Dropdown.Item>Choice 2</Dropdown.Item>
        <Dropdown.Item>Choice 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
)

export default DropdownExampleSimple
