import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

class ExampleMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <Menu color={color} widths={3}>
        <MenuItem
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

const MenuExampleColoredMenus = () => {
  const menus = colors.map((color) => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default MenuExampleColoredMenus
