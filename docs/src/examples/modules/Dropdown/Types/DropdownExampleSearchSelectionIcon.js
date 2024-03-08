import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const packageManagersOptions = [
  { key: 'gem', value: 'gem', icon: 'gem', text: 'RubyGems' },
  { key: 'npm', value: 'npm', icon: 'npm', text: 'NPM' },
  { key: 'docker', value: 'docker', icon: 'docker', text: 'Docker' },
]

const DropdownExampleSearchSelection = () => (
  <Dropdown
    placeholder='Select Package Manager'
    fluid
    search
    selection
    options={packageManagersOptions}
  />
)

export default DropdownExampleSearchSelection
