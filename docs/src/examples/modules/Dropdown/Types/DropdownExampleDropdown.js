import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  Dropdown,
} from 'semantic-ui-react'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const DropdownExampleDropdown = () => (
  <Dropdown text='File'>
    <DropdownMenu>
      <DropdownItem text='New' />
      <DropdownItem text='Open...' description='ctrl + o' />
      <DropdownItem text='Save as...' description='ctrl + s' />
      <DropdownItem text='Rename' description='ctrl + r' />
      <DropdownItem text='Make a copy' />
      <DropdownItem icon='folder' text='Move to folder' />
      <DropdownItem icon='trash' text='Move to trash' />
      <DropdownDivider />
      <DropdownItem text='Download As...' />
      <DropdownItem text='Publish To Web' />
      <DropdownItem text='E-mail Collaborators' />
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleDropdown
