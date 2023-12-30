import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <MenuItem
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Editorials
        </MenuItem>

        <MenuItem
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Reviews
        </MenuItem>

        <MenuItem
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </MenuItem>
      </Menu>
    )
  }
}
