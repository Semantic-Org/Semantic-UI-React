import React from 'react'
import { Menu } from 'stardust'

class MenuExample extends React.Component {
  state = { activeItem: 'a' }

  handleItemClick = activeItem => () => {
    this.setState({ activeItem })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item active={activeItem === 'a'} onClick={this.handleItemClick('a')}>
          Editorials
        </Menu.Item>
        <Menu.Item active={activeItem === 'b'} onClick={this.handleItemClick('b')}>
          Reviews
        </Menu.Item>
        <Menu.Item active={activeItem === 'c'} onClick={this.handleItemClick('c')}>
          Upcoming Events
        </Menu.Item>
      </Menu>
    )
  }
}

export default MenuExample
