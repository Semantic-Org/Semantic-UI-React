import React, { Component } from 'react'
import { MenuMenu, MenuItem, Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
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
        <MenuItem
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <MenuMenu position='right'>
          <MenuItem>
            <Input icon='search' placeholder='Search...' />
          </MenuItem>
          <MenuItem
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </MenuMenu>
      </Menu>
    )
  }
}
