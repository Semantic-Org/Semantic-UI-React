import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { getOptions } from '../common'

const DropdownExampleScrolling = () => (
  <Dropdown placeholder='Select choice' scrolling options={getOptions(15)} />
)

export default DropdownExampleScrolling
