import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { friendOptions } from '../common'

const DropdownExampleCloseOnBlur = () => (
  <Dropdown placeholder='Select Friend' closeOnBlur fluid selection options={friendOptions} />
)

export default DropdownExampleCloseOnBlur
