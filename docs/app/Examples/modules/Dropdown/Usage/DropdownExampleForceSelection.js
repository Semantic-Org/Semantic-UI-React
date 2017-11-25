import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { getOptions } from '../common'

const DropdownExampleForceSelection = () => (
  <Dropdown
    forceSelection={false}
    options={getOptions(5)}
    placeholder='I will not select any value on open'
    selection
  />
)

export default DropdownExampleForceSelection
