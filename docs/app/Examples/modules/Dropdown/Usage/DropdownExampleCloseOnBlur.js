import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { friendItems } from '../common'

const DropdownExampleCloseOnBlur = () => (
  <div>
    <Dropdown placeholder='I close on blur' closeOnBlur selection items={friendItems} />
    {' '}
    <Dropdown placeholder='I stay open on blur' closeOnBlur={false} selection items={friendItems} />
  </div>
)

export default DropdownExampleCloseOnBlur
