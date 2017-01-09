import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { friendOptions } from '../common'

const DropdownExampleOpenOnFocus = () => (
  <Dropdown placeholder='Select Friend' openOnFocus fluid selection options={friendOptions} />
)

export default DropdownExampleOpenOnFocus
