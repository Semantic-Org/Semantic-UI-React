import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { friendOptions } from '../common'

const DropdownExampleInline = () => (
  <span>
    Show me posts by
    {' '}
    <Dropdown inline options={friendOptions} defaultValue={friendOptions[0].value} />
  </span>
)

export default DropdownExampleInline
