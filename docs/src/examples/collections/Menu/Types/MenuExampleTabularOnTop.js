import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top' tabular>
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
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search users...'
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          <img src='/images/wireframe/paragraph.png' />
        </Segment>
      </div>
    )
  }
}
