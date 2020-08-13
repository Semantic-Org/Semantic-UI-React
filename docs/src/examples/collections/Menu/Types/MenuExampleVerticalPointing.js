import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing vertical>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
