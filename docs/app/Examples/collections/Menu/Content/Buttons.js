import React from 'react'
import { Button, Menu } from 'stardust'

// TODO: Update <Button> usage after its update to v1 API

const Buttons = () => {
  return (
    <Menu>
      <Menu.Item>
        <Button className='primary'>Sign up</Button>
      </Menu.Item>

      <Menu.Item>
        <Button>Log-in</Button>
      </Menu.Item>
    </Menu>
  )
}

export default Buttons
