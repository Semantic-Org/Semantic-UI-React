import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Fluid extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid vertical>
        <Menu.Item name='run' active={activeItem === 'run'} onClick={this.handleItemClick} />
        <Menu.Item name='walk' active={activeItem === 'walk'} onClick={this.handleItemClick} />
        <Menu.Item name='bike' active={activeItem === 'bike'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
