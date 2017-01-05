import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleActive = () => (
  <Dropdown text='Dropdown'>
    <Dropdown.Menu>
      <Dropdown.Item>Choice 1</Dropdown.Item>
      <Dropdown.Item disabled>Choice 2</Dropdown.Item>
      <Dropdown.Item>Choice 3</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleActive
