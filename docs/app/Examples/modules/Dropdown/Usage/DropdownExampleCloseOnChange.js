import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { getOptions } from '../common'

const DropdownExampleCloseOnChange = () => (
  <div>
    <Dropdown multiple search selection closeOnChange options={getOptions(5)} placeholder='I close on change' />
    {' '}
    <Dropdown multiple search selection options={getOptions(5)} placeholder='I stay open on change' />
  </div>
)

export default DropdownExampleCloseOnChange
