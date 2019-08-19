import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'new', text: 'New', value: 'new' },
  { key: 'save', text: 'Save as...', value: 'save' },
  { key: 'edit', text: 'Edit', value: 'edit' },
]

const DropdownExampleUpward = () => (
  <Dropdown upward floating options={options} text='File' />
)

export default DropdownExampleUpward
