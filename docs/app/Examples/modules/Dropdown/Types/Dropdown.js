import React, { Component } from 'react'
import { Dropdown } from 'stardust'

export default class DropdownDropdownExample extends Component {
  render() {
    return (
      <Dropdown text='File' action='hide'>
        <Dropdown.Item text='New' />
        <Dropdown.Item text='Open...' description='ctrl + o' />
        <Dropdown.Item text='Save as...' description='ctrl + s' />
        <Dropdown.Item text='Rename' description='ctrl + r' />
        <Dropdown.Item text='Make a copy' />
        <Dropdown.Item icon='trash' text='Move to trash' />
        <Dropdown.Divider />
        <Dropdown.Item text='Download As...' />
        <Dropdown.Item text='Publish To Web'>
          <Dropdown.Menu>
            <Dropdown.Item text='Google Docs' />
            <Dropdown.Item text='Google Drive' />
            <Dropdown.Item text='Dropbox' />
            <Dropdown.Item text='Adobe Creative Cloud' />
            <Dropdown.Item text='Private FTP' />
            <Dropdown.Item text='Another Service...' />
          </Dropdown.Menu>
        </Dropdown.Item>
        {/* item text can also be defined as children */}
        <Dropdown.Item>E-mail Collaborators</Dropdown.Item>
      </Dropdown>
    )
  }
}
