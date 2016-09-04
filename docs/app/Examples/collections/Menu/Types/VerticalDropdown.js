import React, { Component } from 'react'
import { Dropdown, Menu } from 'stardust'

// TODO: Fix Dropdown usage

export default class VerticalDropdown extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary vertical>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Account
        </Menu.Item>

        <Menu.Item
          name='settings'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick}
        >
          Settings
        </Menu.Item>

        <Menu.Item as={Dropdown} text='Display Options'>
          <Dropdown.Menu>
            <div className='header'>Text Size</div>

            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}
