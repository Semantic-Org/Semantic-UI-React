import React from 'react'
import { Button, Input, Menu } from 'stardust'

// TODO: Update <Input> usage after update to v1 API

const Inputs = () => {
  return (
    <Menu>
      <Menu.Item>
        <Input className='icon' icon='search' placeholder='Search...' />
      </Menu.Item>

      <Menu.Item position='right'>
        <Input className='action' placeholder='Navigate to...'>
          <Button type='submit'>Go</Button>
        </Input>
      </Menu.Item>
    </Menu>
  )
}

export default Inputs
