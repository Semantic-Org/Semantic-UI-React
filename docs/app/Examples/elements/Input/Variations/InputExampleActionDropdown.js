import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const items = [
  { key: 'page', text: 'This Page', value: 'page' },
  { key: 'org', text: 'This Organization', value: 'org' },
  { key: 'site', text: 'Entire Site', value: 'site' },
]

const InputExampleActionDropdown = () => (
  <Input
    action={<Dropdown basic floating items={items} defaultValue='page' />}
    icon='search'
    iconPosition='left'
    placeholder='Search...'
  />
)

export default InputExampleActionDropdown
