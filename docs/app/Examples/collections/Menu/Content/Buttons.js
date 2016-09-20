import React from 'react'
import { Button, Menu } from 'stardust'

const Buttons = () => {
  return (
    <Menu>
      <Menu.Item>
        <Button primary>Sign up</Button>
      </Menu.Item>

      <Menu.Item>
        <Button>Log-in</Button>
      </Menu.Item>
    </Menu>
  )
}

export default Buttons
