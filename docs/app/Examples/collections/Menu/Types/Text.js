import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Text extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item name='closest' active={activeItem === 'closest'} onClick={this.handleItemClick} />
        <Menu.Item name='mostComments' active={activeItem === 'comments'} onClick={this.handleItemClick} />
        <Menu.Item name='mostPopular' active={activeItem === 'popular'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
