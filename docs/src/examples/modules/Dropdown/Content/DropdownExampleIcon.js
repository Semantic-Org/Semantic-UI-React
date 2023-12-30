import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
} from 'semantic-ui-react'

const DropdownExampleIcon = () => (
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
      <DropdownItem icon='attention' text='Important' />
      <DropdownItem icon='comment' text='Announcement' />
      <DropdownItem icon='conversation' text='Discussion' />
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleIcon
