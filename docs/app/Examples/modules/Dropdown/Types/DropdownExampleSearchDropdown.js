import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { languageOptions } from '../common'
// languageOptions = [ { key: 'Arabic', text: 'Arabic', value: 'Arabic' }, ...  ]

const DropdownExampleSearchDropdown = () => (
  <Dropdown
    button
    className='icon'
    floating
    labeled
    icon='world'
    options={languageOptions}
    search
    text='Select Language'
  />
)

export default DropdownExampleSearchDropdown
