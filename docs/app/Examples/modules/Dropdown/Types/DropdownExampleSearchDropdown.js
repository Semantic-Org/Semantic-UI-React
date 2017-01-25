import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { languageOptions } from '../common'
// languageOptions = [ { key: 'Arabic', text: 'Arabic', value: 'Arabic' }, ...  ]

/**
 * NOTE: In this example, the dropdown should contain a label on the
 * left of the text:
 * <i class="world icon"></i>
 *
 * @returns {Element}
 */
const DropdownExampleSearchDropdown = () => (
  <Dropdown text='Select Language' search floating labeled button className='icon' options={languageOptions} />
)

export default DropdownExampleSearchDropdown
