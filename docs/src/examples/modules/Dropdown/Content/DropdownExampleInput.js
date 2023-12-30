import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
  Input,
} from 'semantic-ui-react'

const DropdownExampleInput = () => (
  <Dropdown
    text='Filter'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <DropdownMenu>
      <DropdownHeader content='Search Issues' />
      <Input icon='search' iconPosition='left' name='search' />
      <DropdownHeader icon='tags' content='Filter by tag' />
      <DropdownDivider />
      <DropdownItem
        label={{ color: 'red', empty: true, circular: true }}
        text='Important'
      />
      <DropdownItem
        label={{ color: 'blue', empty: true, circular: true }}
        text='Announcement'
      />
      <DropdownItem
        label={{ color: 'black', empty: true, circular: true }}
        text='Discussion'
      />
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleInput
