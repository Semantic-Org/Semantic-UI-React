import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { countryItems } from '../common'
// countryItems = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...  ]

const DropdownExampleMultipleSearchSelectionTwo = () => (
  <Dropdown placeholder='Select Country' fluid multiple search selection items={countryItems} />
)

export default DropdownExampleMultipleSearchSelectionTwo
