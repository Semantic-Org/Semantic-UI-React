import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const options = [
  { key: 'page', text: 'This Page', value: 'page' },
  { key: 'org', text: 'This Organization', value: 'org' },
  { key: 'site', text: 'Entire Site', value: 'site' },
]

const InputExampleActionDropdown = () => (
  <Input
    action={
      <Dropdown button basic floating options={options} defaultValue='page' />
    }
    icon='search'
    iconPosition='left'
    placeholder='Search...'
  />
)

export default InputExampleActionDropdown
