import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { stateOptions } from '../common'

const DropdownExampleMultipleSearchSelection = () => (
  <Dropdown placeholder='State' fluid multiple search selection options={stateOptions} />
)

export default DropdownExampleMultipleSearchSelection
