import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

import { getOptions } from '../common'

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
