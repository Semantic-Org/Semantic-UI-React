import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { friendOptions } from '../common'

const DropdownExampleCloseOnBlur = () => (
  <div>
    <Dropdown placeholder='I close on blur' closeOnBlur selection options={friendOptions} />
    {' '}
    <Dropdown placeholder='I stay open on blur' closeOnBlur={false} selection options={friendOptions} />
  </div>
)

export default DropdownExampleCloseOnBlur
