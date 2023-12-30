import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  Dropdown,
} from 'semantic-ui-react'

const DropdownExampleHeader = () => (
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
      <DropdownItem>Important</DropdownItem>
      <DropdownItem>Announcement</DropdownItem>
      <DropdownItem>Discussion</DropdownItem>
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleHeader
