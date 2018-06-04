import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

import { tagOptions } from '../common'
// tagOptions = [
//   {
//     text: 'Important',
//     value: 'Important',
//     label: { color: 'red', empty: true, circular: true },
//   },
//   ...
// ]


const DropdownExampleMultipleSearchInMenu = () => (
  <Dropdown text='Filter Posts' multiple icon='filter'>
    <Dropdown.Menu>
      <Input icon='search' iconPosition='left' className='search' />
      <Dropdown.Divider />
      <Dropdown.Header icon='tags' content='Tag Label' />
      <Dropdown.Menu scrolling>
        {tagOptions.map(option => <Dropdown.Item key={option.value} {...option} />)}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleMultipleSearchInMenu
