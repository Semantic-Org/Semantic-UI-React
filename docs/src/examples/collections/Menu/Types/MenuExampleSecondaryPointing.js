import React, { Component } from 'react'
import { MenuMenu, MenuItem, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <MenuItem
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <MenuItem
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <MenuMenu position='right'>
            <MenuItem
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </MenuMenu>
        </Menu>

        <Segment>
          <img src='/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>
    )
  }
}
