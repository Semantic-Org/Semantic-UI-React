import _ from 'lodash'
import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const getOptions = (number, prefix = 'Choice ') =>
  _.times(number, (index) => ({
    key: index,
    text: `${prefix}${index}`,
    value: index,
  }))

const DropdownExampleFluid = () => (
  <Menu vertical>
    <Menu.Item as='a'>Link 1</Menu.Item>
    <Menu.Item as='a'>Link 2</Menu.Item>
    <Menu.Item header>All Sections</Menu.Item>
    <Menu.Item>
      <Dropdown placeholder='More' fluid selection options={getOptions(3)} />
    </Menu.Item>
  </Menu>
)

export default DropdownExampleFluid
