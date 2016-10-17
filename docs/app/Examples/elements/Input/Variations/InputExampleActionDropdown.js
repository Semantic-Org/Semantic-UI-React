import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const options = [
  { text: 'This Page', value: 'page' },
  { text: 'This Organization', value: 'org' },
  { text: 'Entire Site', value: 'site' },
]

const InputExampleActionDropdown = () => (
  <Input
    action={<Dropdown basic floating options={options} defaultValue='page' />}
    icon='search'
    iconPosition='left'
    placeholder='Search...'
  />
)

export default InputExampleActionDropdown
