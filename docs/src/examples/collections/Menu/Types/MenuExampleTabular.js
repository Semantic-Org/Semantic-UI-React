import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleTabular extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <Menu.Item
          name='bio'
          active={activeItem === 'bio'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='photos'
          active={activeItem === 'photos'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
