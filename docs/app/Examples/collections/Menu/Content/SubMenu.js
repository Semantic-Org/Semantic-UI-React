import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu } from 'stardust'

export default class SubMenu extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu vertical>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item>
          Home

          <Menu.Menu>
            <Menu.Item
              name='search'
              active={activeItem === 'search'}
              onClick={this.handleItemClick}
            >
              Search
            </Menu.Item>
            <Menu.Item
              name='add'
              active={activeItem === 'add'}
              onClick={this.handleItemClick}
            >
              Add
            </Menu.Item>
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            >
              Remove
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
          <Icon name='grid layout' />
          Browse
        </Menu.Item>
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        >
          Messages
        </Menu.Item>

        <Menu.Item as={Dropdown} text='More'>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Icon name='edit' />
              Edit Profile
            </Dropdown.Item>
            <Dropdown.Item>
              <Icon name='globe' />
              Choose Language
            </Dropdown.Item>
            <Dropdown.Item>
              <Icon name='settings' />
              Account Settings
            </Dropdown.Item>
          </Dropdown.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}
