import React, { Component } from 'react'
import { Icon, Menu, Segment } from 'semantic-ui-react'

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
          <Menu.Item
            name='active'
            active={activeItem === 'active'}
            onClick={this.handleItemClick}
          >
            Active Project
          </Menu.Item>

          <Menu.Item
            name='2'
            active={activeItem === '2'}
            onClick={this.handleItemClick}
          >
            Project #2
          </Menu.Item>

          <Menu.Item
            name='3'
            active={activeItem === '3'}
            onClick={this.handleItemClick}
          >
            Project #3
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              name='new-tab'
              active={activeItem === 'new-tab'}
              onClick={this.handleItemClick}
            >
              <Icon name='add' />
              New Tab
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
