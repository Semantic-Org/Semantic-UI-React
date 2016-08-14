import React from 'react'
import { Menu } from 'stardust'

const Vertical = () => {
  return (
    <Menu vertical>
      <Menu.Item>
        <Menu.Header>Products</Menu.Header>

        <Menu>
          <Menu.Item>Enterprise</Menu.Item>
          <Menu.Item>Consumer</Menu.Item>
        </Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>CMS Solutions</Menu.Header>

        <Menu>
          <Menu.Item>Rails</Menu.Item>
          <Menu.Item>Python</Menu.Item>
          <Menu.Item>PHP</Menu.Item>
        </Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Hosting</Menu.Header>

        <Menu>
          <Menu.Item>Shared</Menu.Item>
          <Menu.Item>Dedicated</Menu.Item>
        </Menu>
      </Menu.Item>

      <Menu.Item>
        <Menu.Header>Support</Menu.Header>

        <Menu>
          <Menu.Item>E-mail Support</Menu.Item>
          <Menu.Item>FAQs</Menu.Item>
        </Menu>
      </Menu.Item>
    </Menu>
  )
}

export default Vertical
