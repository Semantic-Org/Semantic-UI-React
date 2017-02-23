import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { stateItems } from '../common'
// stateItems = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

const DropdownExampleMultipleSearchSelection = () => (
  <Dropdown placeholder='State' fluid multiple search selection items={stateItems} />
)

export default DropdownExampleMultipleSearchSelection
