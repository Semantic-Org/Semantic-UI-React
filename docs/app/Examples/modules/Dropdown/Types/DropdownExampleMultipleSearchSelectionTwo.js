import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { countryOptions } from '../common'
// countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...  ]

const DropdownExampleMultipleSearchSelectionTwo = () => (
  <Dropdown placeholder='Select Country' fluid multiple search selection options={countryOptions} />
)

export default DropdownExampleMultipleSearchSelectionTwo
