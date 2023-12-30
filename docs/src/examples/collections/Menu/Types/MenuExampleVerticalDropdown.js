import React, { Component } from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  MenuItem,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary vertical>
        <MenuItem
          name='account'
          active={activeItem === 'account'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='settings'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick}
        />
        <Dropdown item text='Display Options'>
          <DropdownMenu>
            <DropdownHeader>Text Size</DropdownHeader>
            <DropdownItem>Small</DropdownItem>
            <DropdownItem>Medium</DropdownItem>
            <DropdownItem>Large</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Menu>
    )
  }
}
