import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleLoading = () => (
  <Dropdown text='Dropdown' loading>
    <Dropdown.Menu>
      <Dropdown.Item>Choice 1</Dropdown.Item>
      <Dropdown.Item>Choice 2</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleLoading
