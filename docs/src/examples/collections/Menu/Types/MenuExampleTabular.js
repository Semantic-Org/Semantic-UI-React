import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default class MenuExampleTabular extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <MenuItem
          name='bio'
          active={activeItem === 'bio'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='photos'
          active={activeItem === 'photos'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
