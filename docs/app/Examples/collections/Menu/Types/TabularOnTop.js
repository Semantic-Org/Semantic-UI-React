import React, { Component } from 'react'
import { Menu, Segment } from 'stardust'

// TODO: Update <Input /> usage after its will implemented

export default class TabularOnTop extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
          <Menu.Item name='photos' active={activeItem === 'photos'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <div className='ui transparent icon input'>
                <input type='text' placeholder='Search users...' />
                <i className='search link icon' />
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </div>
    )
  }
}
