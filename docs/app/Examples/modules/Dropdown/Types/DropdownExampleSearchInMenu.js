import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

import { tagItems } from '../common'
// tagItems = [
//   {
//     text: 'Important',
//     value: 'Important',
//     label: { color: 'red', empty: true, circular: true },
//   },
//   ...
// ]

const DropdownExampleSearchInMenu = () => (
  <Dropdown icon='filter' text='Filter Posts' floating labeled button className='icon'>
    <Dropdown.Menu>
      <Input icon='search' iconPosition='left' className='search' />
      <Dropdown.Divider />
      <Dropdown.Header icon='tags' content='Tag Label' />
      <Dropdown.Menu scrolling>
        {tagItems.map((item) => <Dropdown.Item key={item.value} {...item} />)}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleSearchInMenu
