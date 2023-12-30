import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalFitted extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <MenuItem
          name='default'
          active={activeItem === 'default'}
          fitted
          onClick={this.handleItemClick}
        >
          No padding whatsoever
        </MenuItem>

        <MenuItem
          name='horizontally'
          active={activeItem === 'horizontally'}
          fitted='horizontally'
          onClick={this.handleItemClick}
        >
          No horizontal padding
        </MenuItem>

        <MenuItem
          name='vertically'
          active={activeItem === 'vertically'}
          fitted='vertically'
          onClick={this.handleItemClick}
        >
          No vertical padding
        </MenuItem>
      </Menu>
    )
  }
}
