import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Fitted extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu borderless>
        <Menu.Item
          name='1'
          active={activeItem === '1'}
          onClick={this.handleItemClick}
        >
          1
        </Menu.Item>

        <Menu.Item
          name='2'
          active={activeItem === '2'}
          onClick={this.handleItemClick}
        >
          2
        </Menu.Item>

        <Menu.Item
          name='3'
          active={activeItem === '3'}
          onClick={this.handleItemClick}
        >
          3
        </Menu.Item>

        <Menu.Item
          name='4'
          active={activeItem === '4'}
          onClick={this.handleItemClick}
        >
          4
        </Menu.Item>

        <Menu.Item
          name='5'
          active={activeItem === '5'}
          onClick={this.handleItemClick}
        >
          5
        </Menu.Item>

        <Menu.Item
          name='6'
          active={activeItem === '6'}
          onClick={this.handleItemClick}
        >
          6
        </Menu.Item>
      </Menu>
    )
  }
}
