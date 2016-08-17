import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Stackable extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu stackable>
        <Menu.Item>
          <img src='http://semantic-ui.com/images/logo.png' />
        </Menu.Item>
        <Menu.Item
          name='Features'
          active={activeItem === 'Features'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Testimonials'
          active={activeItem === 'Testimonials'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Sign-in'
          active={activeItem === 'Sign-in'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
