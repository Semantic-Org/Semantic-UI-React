import React, { Component } from 'react'
import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

export default class MenuExampleSizeTiny extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='tiny'>
        <MenuItem
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />

        <MenuMenu position='right'>
          <Dropdown item text='Language'>
            <DropdownMenu>
              <DropdownItem>English</DropdownItem>
              <DropdownItem>Russian</DropdownItem>
              <DropdownItem>Spanish</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <MenuItem>
            <Button primary>Sign Up</Button>
          </MenuItem>
        </MenuMenu>
      </Menu>
    )
  }
}
