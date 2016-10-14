import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleError = () => (
  <Dropdown text='Dropdown' error>
    <Dropdown.Menu>
      <Dropdown.Item>Choice 1</Dropdown.Item>
      <Dropdown.Item>Choice 2</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleError
