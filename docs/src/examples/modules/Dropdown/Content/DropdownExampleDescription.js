import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
} from 'semantic-ui-react'

const DropdownExampleDescription = () => (
  <Dropdown
    text='Filter Tags'
    floating
    labeled
    button
    icon='filter'
    className='icon'
  >
    <DropdownMenu>
      <DropdownHeader icon='tags' content='Filter by tag' />
      <DropdownDivider />
      <DropdownItem description='2 new' text='Important' />
      <DropdownItem description='10 new' text='Hopper' />
      <DropdownItem description='5 new' text='Discussion' />
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleDescription
