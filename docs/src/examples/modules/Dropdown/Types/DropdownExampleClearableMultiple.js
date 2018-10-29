import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { countryOptions } from '../common'
// countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...  ]

const DropdownExampleClearableMultiple = () => (
  <Dropdown
    clearable
    fluid
    multiple
    search
    selection
    options={countryOptions}
    placeholder='Select Country'
  />
)

export default DropdownExampleClearableMultiple
