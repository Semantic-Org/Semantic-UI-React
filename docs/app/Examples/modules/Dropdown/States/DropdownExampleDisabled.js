import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleDisabled = () => (
  <Dropdown text='Dropdown' disabled>
    <Dropdown.Menu>
      <Dropdown.Item>Choice 1</Dropdown.Item>
      <Dropdown.Item>Choice 2</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleDisabled
