import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class VerticalText extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text vertical>
        <Menu.Item header>
          Sort By
        </Menu.Item>

        <Menu.Item
          name='closest'
          active={activeItem === 'closest'}
          onClick={this.handleItemClick}
        >
          Closest
        </Menu.Item>

        <Menu.Item
          name='comments'
          active={activeItem === 'comments'}
          onClick={this.handleItemClick}
        >
          Most Comments
        </Menu.Item>

        <Menu.Item
          name='popular'
          active={activeItem === 'popular'}
          onClick={this.handleItemClick}
        >
          Most Popular
        </Menu.Item>
      </Menu>
    )
  }
}
