import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default class MenuExampleContentProp extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <MenuItem
          name='editorials'
          active={activeItem === 'editorials'}
          content='Editorials'
          onClick={this.handleItemClick}
        />

        <MenuItem
          name='reviews'
          active={activeItem === 'reviews'}
          content='Reviews'
          onClick={this.handleItemClick}
        />

        <MenuItem
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          content='Upcoming Events'
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
