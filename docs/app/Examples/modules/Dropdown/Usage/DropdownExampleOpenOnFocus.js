import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { friendOptions } from '../common'

const DropdownExampleOpenOnFocus = () => (
  <div>
    <Dropdown placeholder='I open on focus' openOnFocus selection options={friendOptions} />
    {' '}
    <Dropdown placeholder='I do not open on focussed' openOnFocus={false} selection options={friendOptions} />
  </div>
)

export default DropdownExampleOpenOnFocus
