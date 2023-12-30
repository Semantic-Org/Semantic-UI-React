import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
} from 'semantic-ui-react'

const DropdownExampleDivider = () => (
  <Dropdown
    text='Filter'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <DropdownMenu>
      <DropdownHeader icon='tags' content='Filter by tag' />
      <DropdownDivider />
      <DropdownItem>Important</DropdownItem>
      <DropdownItem>Announcement</DropdownItem>
      <DropdownItem>Discussion</DropdownItem>
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleDivider
