import React from 'react'
import { Menu } from 'stardust'

const Hover = () => {
  return (
    <Menu compact>
      <Menu.Item as='a'>A link</Menu.Item>
      <Menu.Item link>div Link</Menu.Item>
    </Menu>
  )
}

export default Hover
