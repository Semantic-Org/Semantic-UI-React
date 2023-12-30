import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default class MenuExampleInvertedVertical extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted vertical>
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
      </Menu>
    )
  }
}
