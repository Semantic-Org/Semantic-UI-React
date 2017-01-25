import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

import { tagItems } from '../common'

const DropdownExampleSearchInMenuScrolling = () => (
  <Dropdown icon='filter' text='Filter Posts'>
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

export default DropdownExampleSearchInMenuScrolling
