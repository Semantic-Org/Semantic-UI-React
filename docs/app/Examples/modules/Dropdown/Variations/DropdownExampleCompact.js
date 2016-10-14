import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleCompact = () => (
  <Dropdown text='Compact' compact selection>
    <Dropdown.Menu>
      <Dropdown.Item>A</Dropdown.Item>
      <Dropdown.Item>B</Dropdown.Item>
      <Dropdown.Item>C</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleCompact
