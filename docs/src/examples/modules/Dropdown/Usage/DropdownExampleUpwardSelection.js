import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 },
]

const DropdownExampleUpwardSelection = () => (
  <Dropdown
    upward
    search
    selection
    options={options}
    placeholder='Choose an option'
  />
)

export default DropdownExampleUpwardSelection
