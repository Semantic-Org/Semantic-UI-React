import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { languageItems } from '../common'
// languageItems = [ { key: 'Arabic', text: 'Arabic', value: 'Arabic' }, ...  ]

const DropdownExampleSearchDropdown = () => (
  <Dropdown
    text='Select Language'
    icon='world'
    search
    floating
    labeled
    button
    // TODO: remove className once button/icon API is in place
    className='icon'
    items={languageItems}
  />
)

export default DropdownExampleSearchDropdown
