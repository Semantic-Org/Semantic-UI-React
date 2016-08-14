import React from 'react'
import { Menu } from 'stardust'

const Header = () => {
  return (
    <Menu>
      <Menu.Item header>Our Company</Menu.Item>

      <Menu.Item>About Us</Menu.Item>
      <Menu.Item>Jobs</Menu.Item>
      <Menu.Item>Locations</Menu.Item>
    </Menu>
  )
}

export default Header
