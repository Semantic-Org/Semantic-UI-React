import React, { Component } from 'react'
import { Dropdown } from 'stardust'

export default class DropdownExample extends Component {
  render() {
    return (
      <Dropdown text='File'>
        <Dropdown.Menu>
          <Dropdown.Item text='New' />
          <Dropdown.Item text='Open...' description='ctrl + o' />
          <Dropdown.Item text='Save as...' description='ctrl + s' />
          <Dropdown.Item text='Rename' description='ctrl + r' />
          <Dropdown.Item text='Make a copy' />
          <Dropdown.Item icon='trash' text='Move to trash' />
          <Dropdown.Divider />
          <Dropdown.Item text='Download As...' />
          <Dropdown.Item text='Publish To Web' />
          {/* item text can also be defined as children */}
          <Dropdown.Item>E-mail Collaborators</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
