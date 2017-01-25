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

const DropdownExampleMultipleSearchInMenu = () => (
  <Dropdown text='Filter Posts' multiple>
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

export default DropdownExampleMultipleSearchInMenu
