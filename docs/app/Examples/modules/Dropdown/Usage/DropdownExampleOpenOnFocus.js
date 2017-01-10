import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { friendOptions } from '../common'

const DropdownExampleOpenOnFocus = () => (
  <div>
    <Dropdown placeholder='I stay open on focus' openOnFocus fluid selection options={friendOptions} />
    <br />
    <Dropdown placeholder='I close when not focussed' openOnFocus={false} fluid selection options={friendOptions} />
  </div>
)

export default DropdownExampleOpenOnFocus
