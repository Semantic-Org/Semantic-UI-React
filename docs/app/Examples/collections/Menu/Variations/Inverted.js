import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Inverted extends Component {
  constructor() {
    super()
    this.state = { activeItem: 'Home' }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Messages'
          active={activeItem === 'Messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Friends'
          active={activeItem === 'Friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
