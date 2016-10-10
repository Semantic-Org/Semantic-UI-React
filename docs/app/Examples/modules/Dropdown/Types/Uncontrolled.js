import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { text: 'One', value: 1 },
  { text: 'Two', value: 2 },
  { text: 'Three', value: 3 },
]

const DropdownUncontrolledExample = () => (
  <Dropdown
    selection
    options={options}
    placeholder='Choose an option'
  />
)

export default DropdownUncontrolledExample
