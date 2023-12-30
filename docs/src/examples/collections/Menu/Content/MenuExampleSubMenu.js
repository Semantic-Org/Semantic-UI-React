import React, { Component } from 'react'
import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Dropdown,
  Icon,
  Input,
  Menu,
} from 'semantic-ui-react'

export default class MenuExampleSubMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <MenuItem>
          <Input placeholder='Search...' />
        </MenuItem>

        <MenuItem>
          Home
          <MenuMenu>
            <MenuItem
              name='search'
              active={activeItem === 'search'}
              onClick={this.handleItemClick}
            >
              Search
            </MenuItem>
            <MenuItem
              name='add'
              active={activeItem === 'add'}
              onClick={this.handleItemClick}
            >
              Add
            </MenuItem>
            <MenuItem
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            >
              Remove
            </MenuItem>
          </MenuMenu>
        </MenuItem>

        <MenuItem
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
          <Icon name='grid layout' />
          Browse
        </MenuItem>
        <MenuItem
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        >
          Messages
        </MenuItem>

        <Dropdown item text='More'>
          <DropdownMenu>
            <DropdownItem icon='edit' text='Edit Profile' />
            <DropdownItem icon='globe' text='Choose Language' />
            <DropdownItem icon='settings' text='Account Settings' />
          </DropdownMenu>
        </Dropdown>
      </Menu>
    )
  }
}
