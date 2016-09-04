import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Names extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu>
        <Menu.Item
          name='Editorials'
          active={activeItem === 'Editorials'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Reviews'
          active={activeItem === 'Reviews'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Events'
          active={activeItem === 'Events'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
