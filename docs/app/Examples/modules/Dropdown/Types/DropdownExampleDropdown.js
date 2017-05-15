import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const DropdownExampleDropdown = () => (
  <Dropdown text='File'>
    <Dropdown.Menu>
      <Dropdown.Item text='New' />
      <Dropdown.Item text='Open...' description='ctrl + o' />
      <Dropdown.Item text='Save as...' description='ctrl + s' />
      <Dropdown.Item text='Rename' description='ctrl + r' />
      <Dropdown.Item text='Make a copy' />
      <Dropdown.Item icon='folder' text='Move to folder' />
      <Dropdown.Item icon='trash' text='Move to trash' />
      <Dropdown.Divider />
      <Dropdown.Item text='Download As...' />
      <Dropdown.Item text='Publish To Web' />
      <Dropdown.Item text='E-mail Collaborators' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleDropdown
