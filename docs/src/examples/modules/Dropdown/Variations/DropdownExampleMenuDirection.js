import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'This is a super long item', value: 1 },
  { key: 2, text: 'Dropdown direction can help', value: 2 },
  { key: 3, text: 'Items are kept within view', value: 3 },
]

const DropdownExampleMenuDirection = () => (
  <Menu>
    <Dropdown
      item
      simple
      text='Left menu'
      direction='right'
      options={options}
    />
    <Menu.Menu position='right'>
      <Dropdown
        item
        simple
        text='Right menu'
        direction='right'
        options={options}
      />
    </Menu.Menu>
  </Menu>
)

export default DropdownExampleMenuDirection
