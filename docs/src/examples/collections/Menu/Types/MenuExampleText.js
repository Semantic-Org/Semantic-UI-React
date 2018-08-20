import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleText extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name='closest'
          active={activeItem === 'closest'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='mostComments'
          active={activeItem === 'mostComments'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='mostPopular'
          active={activeItem === 'mostPopular'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
