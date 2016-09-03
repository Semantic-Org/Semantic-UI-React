import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class ColoredRest extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu>
        <Menu.Item
          name='blue'
          active={activeItem === 'blue'}
          color='blue'
          onClick={this.handleItemClick}
        >
          Blue
        </Menu.Item>

        <Menu.Item
          name='violet'
          active={activeItem === 'violet'}
          color='violet'
          onClick={this.handleItemClick}
        >
          Violet
        </Menu.Item>

        <Menu.Item
          name='purple'
          active={activeItem === 'purple'}
          color='purple'
          onClick={this.handleItemClick}
        >
          Purple
        </Menu.Item>

        <Menu.Item
          name='pink'
          active={activeItem === 'pink'}
          color='pink'
          onClick={this.handleItemClick}
        >
          Pink
        </Menu.Item>

        <Menu.Item
          name='brown'
          active={activeItem === 'brown'}
          color='brown'
          onClick={this.handleItemClick}
        >
          Brown
        </Menu.Item>

        <Menu.Item
          name='grey'
          active={activeItem === 'grey'}
          color='grey'
          onClick={this.handleItemClick}
        >
          Grey
        </Menu.Item>
      </Menu>
    )
  }
}
