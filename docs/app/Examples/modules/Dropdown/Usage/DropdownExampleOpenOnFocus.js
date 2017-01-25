import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { friendItems } from '../common'

const DropdownExampleOpenOnFocus = () => (
  <div>
    <Dropdown placeholder='I open on focus' openOnFocus selection items={friendItems} />
    {' '}
    <Dropdown placeholder='I do not open on focus' openOnFocus={false} selection items={friendItems} />
  </div>
)

export default DropdownExampleOpenOnFocus
