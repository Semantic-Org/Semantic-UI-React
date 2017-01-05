import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { stateOptions } from '../common'
// stateOptions = [ { value: 'AL', text: 'Alabama' }, ...  ]

const DropdownExampleSearchSelectionTwo = () => (
  <Dropdown placeholder='State' search selection options={stateOptions} />
)

export default DropdownExampleSearchSelectionTwo
