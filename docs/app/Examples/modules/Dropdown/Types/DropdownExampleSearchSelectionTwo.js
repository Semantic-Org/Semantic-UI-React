import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { stateItems } from '../common'
// stateItems = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

const DropdownExampleSearchSelectionTwo = () => (
  <Dropdown placeholder='State' search selection items={stateItems} />
)

export default DropdownExampleSearchSelectionTwo
