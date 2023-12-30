import React, { Component } from 'react'
import { MenuItem, Icon, Menu } from 'semantic-ui-react'

export default class MenuExampleLabeledIconsVertical extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled' vertical>
        <MenuItem
          name='gamepad'
          active={activeItem === 'gamepad'}
          onClick={this.handleItemClick}
        >
          <Icon name='gamepad' />
          Games
        </MenuItem>

        <MenuItem
          name='video camera'
          active={activeItem === 'video camera'}
          onClick={this.handleItemClick}
        >
          <Icon name='video camera' />
          Channels
        </MenuItem>

        <MenuItem
          name='video play'
          active={activeItem === 'video play'}
          onClick={this.handleItemClick}
        >
          <Icon name='video play' />
          Videos
        </MenuItem>
      </Menu>
    )
  }
}
