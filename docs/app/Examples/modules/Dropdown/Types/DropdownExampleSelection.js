import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { friendOptions } from '../common'

const DropdownExampleSelection = () => (
  <Dropdown placeholder='Select Friend' fluid selection options={friendOptions} />
)

export default DropdownExampleSelection
