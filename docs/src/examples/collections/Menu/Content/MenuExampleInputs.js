import React from 'react'
import { MenuItem, Input, Menu } from 'semantic-ui-react'

const MenuExampleInputs = () => (
  <Menu>
    <MenuItem>
      <Input className='icon' icon='search' placeholder='Search...' />
    </MenuItem>

    <MenuItem position='right'>
      <Input
        action={{ type: 'submit', content: 'Go' }}
        placeholder='Navigate to...'
      />
    </MenuItem>
  </Menu>
)

export default MenuExampleInputs
