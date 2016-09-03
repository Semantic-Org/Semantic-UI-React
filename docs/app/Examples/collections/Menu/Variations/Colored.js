import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Colored extends Component {
  state = { activeItem: 'red' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='red'
          active={activeItem === 'red'}
          color='red'
          onClick={this.handleItemClick}
        >
          Red
        </Menu.Item>

        <Menu.Item
          name='orange'
          active={activeItem === 'orange'}
          color='orange'
          onClick={this.handleItemClick}
        >
          Orange
        </Menu.Item>

        <Menu.Item
          name='yellow'
          active={activeItem === 'yellow'}
          color='yellow'
          onClick={this.handleItemClick}
        >
          Yellow
        </Menu.Item>

        <Menu.Item
          name='olive'
          active={activeItem === 'olive'}
          color='olive'
          onClick={this.handleItemClick}
        >
          Olive
        </Menu.Item>

        <Menu.Item
          name='green'
          active={activeItem === 'green'}
          color='green'
          onClick={this.handleItemClick}
        >
          Green
        </Menu.Item>

        <Menu.Item
          name='teal'
          active={activeItem === 'teal'}
          color='teal'
          onClick={this.handleItemClick}
        >
          Teal
        </Menu.Item>
      </Menu>
    )
  }
}
