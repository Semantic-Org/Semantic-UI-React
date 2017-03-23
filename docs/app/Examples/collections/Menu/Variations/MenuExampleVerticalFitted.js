import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalFitted extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <Menu.Item
          name='default'
          active={activeItem === 'default'}
          fitted
          onClick={this.handleItemClick}
        >
          No padding whatsoever
        </Menu.Item>

        <Menu.Item
          name='horizontally'
          active={activeItem === 'horizontally'}
          fitted='horizontally'
          onClick={this.handleItemClick}
        >
          No horizontal padding
        </Menu.Item>

        <Menu.Item
          name='vertically'
          active={activeItem === 'vertically'}
          fitted='vertically'
          onClick={this.handleItemClick}
        >
          No vertical padding
        </Menu.Item>
      </Menu>
    )
  }
}
