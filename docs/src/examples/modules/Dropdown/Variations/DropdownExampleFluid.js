import _ from 'lodash'
import React from 'react'
import { MenuItem, Dropdown, Menu } from 'semantic-ui-react'

const getOptions = (number, prefix = 'Choice ') =>
  _.times(number, (index) => ({
    key: index,
    text: `${prefix}${index}`,
    value: index,
  }))

const DropdownExampleFluid = () => (
  <Menu vertical>
    <MenuItem as='a'>Link 1</MenuItem>
    <MenuItem as='a'>Link 2</MenuItem>
    <MenuItem header>All Sections</MenuItem>
    <MenuItem>
      <Dropdown placeholder='More' fluid selection options={getOptions(3)} />
    </MenuItem>
  </Menu>
)

export default DropdownExampleFluid
