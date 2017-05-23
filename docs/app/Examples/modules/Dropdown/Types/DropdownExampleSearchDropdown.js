import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { languageOptions as languages } from '../common'
// languages = [ { key: 'Arabic', text: 'Arabic', value: 'Arabic' }, ...  ]

const DropdownExampleSearchDropdown = () => (
  <Dropdown text='Select Language' search floating labeled button className='icon' icon='world' options={languages} />
)

export default DropdownExampleSearchDropdown
