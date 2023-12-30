import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default class MenuExampleFluid extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid vertical>
        <MenuItem
          name='run'
          active={activeItem === 'run'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='walk'
          active={activeItem === 'walk'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='bike'
          active={activeItem === 'bike'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
