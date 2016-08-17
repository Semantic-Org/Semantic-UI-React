import React, { Component } from 'react'
import { Menu, Segment } from 'stardust'

// TODO: Update <Segment> usage after its update to v1 API

export default class InvertedSecondary extends Component {
  constructor() {
    super()
    this.state = { activeItem: 'Home' }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment className='inverted'>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Messages'
            active={activeItem === 'Messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Friends'
            active={activeItem === 'Friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}
