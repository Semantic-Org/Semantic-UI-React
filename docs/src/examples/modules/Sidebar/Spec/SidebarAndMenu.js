import React from 'react'
import { Menu, Sidebar } from 'semantic-ui-react'

const SidebarAndMenu = () => (
  <Sidebar
    as={Menu}
    animation='push'
    data-tid='menu'
    inverted
    items={[
      { key: 'home', content: 'Home', 'data-tid': 'menu-item' },
      { key: 'about', content: 'About' },
    ]}
    vertical
    visible
  />
)

export default SidebarAndMenu
