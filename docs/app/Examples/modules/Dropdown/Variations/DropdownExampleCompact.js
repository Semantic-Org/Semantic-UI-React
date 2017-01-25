import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { getItems } from '../common'

const DropdownExampleCompact = () => (
  <Dropdown placeholder='Compact' compact selection items={getItems(3, '')} />
)

export default DropdownExampleCompact
