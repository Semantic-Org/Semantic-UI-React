import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { getItems } from '../common'

const DropdownExampleScrolling = () => (
  <Dropdown placeholder='Select choice' scrolling items={getItems(15)} />
)

export default DropdownExampleScrolling
