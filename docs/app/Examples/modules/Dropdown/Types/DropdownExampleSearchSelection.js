import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { countryItems } from '../common'
// countryItems = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...  ]

const DropdownExampleSearchSelection = () => (
  <Dropdown placeholder='Select Country' fluid search selection items={countryItems} />
)

export default DropdownExampleSearchSelection
