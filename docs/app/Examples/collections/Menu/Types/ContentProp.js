import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class ContentProp extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          content='Editorials'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          content='Reviews'
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='events'
          active={activeItem === 'events'}
          content='Upcoming Events'
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
