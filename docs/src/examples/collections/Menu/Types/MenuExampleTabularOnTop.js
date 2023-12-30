import React, { Component } from 'react'
import { MenuMenu, MenuItem, Input, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top' tabular>
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
          <MenuMenu position='right'>
            <MenuItem>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search users...'
              />
            </MenuItem>
          </MenuMenu>
        </Menu>

        <Segment attached='bottom'>
          <img src='/images/wireframe/paragraph.png' />
        </Segment>
      </div>
    )
  }
}
