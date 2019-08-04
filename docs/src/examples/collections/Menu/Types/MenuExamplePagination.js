import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExamplePagination extends Component {
  state = { activeItem: '10' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pagination>
        <Menu.Item
          name='1'
          active={activeItem === '1'}
          onClick={this.handleItemClick}
        />
        <Menu.Item disabled>...</Menu.Item>
        <Menu.Item
          name='10'
          active={activeItem === '10'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='11'
          active={activeItem === '11'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='12'
          active={activeItem === '12'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
