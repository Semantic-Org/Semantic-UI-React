import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { friendOptions } from '../common'

const DropdownExampleCloseOnBlur = () => (
  <div>
    <Dropdown placeholder='I close on blur' closeOnBlur fluid selection options={friendOptions} />
    <br />
    <Dropdown placeholder='I stay open on blur' closeOnBlur={false} fluid selection options={friendOptions} />
  </div>
)

export default DropdownExampleCloseOnBlur
