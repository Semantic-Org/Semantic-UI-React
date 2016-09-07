import React, { Component } from 'react'
import { Menu, Segment } from 'stardust'

export default class SecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          >
            Messages
          </Menu.Item>

          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          >
            Friends
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            >
              Logout
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>
    )
  }
}
