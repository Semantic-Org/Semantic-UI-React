import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { friendOptions } from '../common'

const DropdownExampleKeepInViewPortSelection = () => (
  <Dropdown placeholder='Select Friend' fluid selection options={friendOptions} keepInViewPort />
)

export default DropdownExampleKeepInViewPortSelection
