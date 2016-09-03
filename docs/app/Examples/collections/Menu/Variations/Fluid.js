import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Fluid extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu fluid vertical>
        <Menu.Item
          name='run'
          active={activeItem === 'run'}
          onClick={this.handleItemClick}
        >
          Run
        </Menu.Item>

        <Menu.Item
          name='walk'
          active={activeItem === 'walk'}
          onClick={this.handleItemClick}
        >
          Walk
        </Menu.Item>

        <Menu.Item
          name='bike'
          active={activeItem === 'bike'}
          onClick={this.handleItemClick}
        >
          Bike
        </Menu.Item>
      </Menu>
    )
  }
}
