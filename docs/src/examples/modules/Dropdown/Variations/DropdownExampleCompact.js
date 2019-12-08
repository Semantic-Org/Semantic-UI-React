import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const getOptions = (number, prefix = 'Choice ') =>
  _.times(number, (index) => ({
    key: index,
    text: `${prefix}${index}`,
    value: index,
  }))

const DropdownExampleCompact = () => (
  <Dropdown
    placeholder='Compact'
    compact
    selection
    options={getOptions(3, '')}
  />
)

export default DropdownExampleCompact
