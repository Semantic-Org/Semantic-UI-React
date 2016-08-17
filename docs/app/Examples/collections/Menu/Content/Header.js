import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Header extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu>
        <Menu.Item header>Our Company</Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About us
        </Menu.Item>

        <Menu.Item
          name='jobs'
          active={activeItem === 'jobs'}
          onClick={this.handleItemClick}
        >
          Jobs
        </Menu.Item>

        <Menu.Item
          name='locations'
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
        >
          Locations
        </Menu.Item>
      </Menu>
    )
  }
}
