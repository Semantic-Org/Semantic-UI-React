import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default class MenuExampleBorderless extends Component {
  state = { activeItem: '1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu borderless>
        <MenuItem
          name='1'
          active={activeItem === '1'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='2'
          active={activeItem === '2'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='3'
          active={activeItem === '3'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='4'
          active={activeItem === '4'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='5'
          active={activeItem === '5'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='6'
          active={activeItem === '6'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
