import React, { Component } from 'react'
import { MenuMenu, MenuItem, Icon, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleTabularOnBottom extends Component {
  state = { activeItem: 'active' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Segment attached='top'>
          <img src='/images/wireframe/paragraph.png' />
        </Segment>

        <Menu attached='bottom' tabular>
          <MenuItem
            name='active'
            active={activeItem === 'active'}
            onClick={this.handleItemClick}
          >
            Active Project
          </MenuItem>

          <MenuItem
            name='2'
            active={activeItem === '2'}
            onClick={this.handleItemClick}
          >
            Project #2
          </MenuItem>

          <MenuItem
            name='3'
            active={activeItem === '3'}
            onClick={this.handleItemClick}
          >
            Project #3
          </MenuItem>

          <MenuMenu position='right'>
            <MenuItem
              name='new-tab'
              active={activeItem === 'new-tab'}
              onClick={this.handleItemClick}
            >
              <Icon name='add' />
              New Tab
            </MenuItem>
          </MenuMenu>
        </Menu>
      </div>
    )
  }
}
