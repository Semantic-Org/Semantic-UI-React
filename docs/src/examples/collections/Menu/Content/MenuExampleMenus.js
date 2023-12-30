import React, { Component } from 'react'
import { MenuMenu, MenuItem, Menu } from 'semantic-ui-react'

export default class MenuExampleMenus extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <MenuItem
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
          Browse
        </MenuItem>

        <MenuItem
          name='submit'
          active={activeItem === 'submit'}
          onClick={this.handleItemClick}
        >
          Submit
        </MenuItem>

        <MenuMenu position='right'>
          <MenuItem
            name='signup'
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
          >
            Sign Up
          </MenuItem>

          <MenuItem
            name='help'
            active={activeItem === 'help'}
            onClick={this.handleItemClick}
          >
            Help
          </MenuItem>
        </MenuMenu>
      </Menu>
    )
  }
}
