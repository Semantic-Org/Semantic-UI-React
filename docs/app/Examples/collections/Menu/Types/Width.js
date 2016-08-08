import React from 'react'
import { Menu } from 'stardust'

const Width = () => {
  return (
    <div>
      <Menu widths={3}>
        <Menu.Item active>Editorials</Menu.Item>
        <Menu.Item>Reviews</Menu.Item>
        <Menu.Item>Upcoming Events</Menu.Item>
      </Menu>

      <Menu widths='three'>
        <Menu.Item>Editorials</Menu.Item>
        <Menu.Item active>Reviews</Menu.Item>
        <Menu.Item>Upcoming Events</Menu.Item>
      </Menu>
    </div>
  )
}

export default Width
