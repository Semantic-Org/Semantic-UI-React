import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
]

const DropdownExampleDisabled = () => (
  <Dropdown text='Dropdown' options={options} disabled />
)

export default DropdownExampleDisabled
