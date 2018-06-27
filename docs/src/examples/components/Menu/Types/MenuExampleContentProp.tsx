import React from 'react'
import { Menu } from 'stardust'

class MenuExampleContentProp extends React.Component {
  state = { activeItem: 'a' }

  handleItemClick = activeItem => () => {
    this.setState({ activeItem })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          active={activeItem === 'a'}
          content="Editorials"
          onClick={this.handleItemClick('a')}
        />

        <Menu.Item
          active={activeItem === 'b'}
          content="Reviews"
          onClick={this.handleItemClick('b')}
        />

        <Menu.Item
          active={activeItem === 'c'}
          content="Upcoming Events"
          onClick={this.handleItemClick('c')}
        />
      </Menu>
    )
  }
}

export default MenuExampleContentProp
