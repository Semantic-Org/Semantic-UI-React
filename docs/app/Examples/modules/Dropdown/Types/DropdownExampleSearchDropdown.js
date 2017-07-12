import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { languageOptions } from '../common'
// languageOptions = [ { key: 'Arabic', text: 'Arabic', value: 'Arabic' }, ...  ]

const DropdownExampleSearchDropdown = () => (
  <Dropdown text='Select Language'
    search
    floating
    labeled
    button
    className='icon'
    icon='world'
    options={languageOptions}
  />
)

export default DropdownExampleSearchDropdown
