import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const DropdownExampleInput = () => (
  <Dropdown
    text='Filter'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Header content='Search Issues' />
      <Input icon='search' iconPosition='left' name='search' />
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Divider />
      <Dropdown.Item
        label={{ color: 'red', empty: true, circular: true }}
        text='Important'
      />
      <Dropdown.Item
        label={{ color: 'blue', empty: true, circular: true }}
        text='Announcement'
      />
      <Dropdown.Item
        label={{ color: 'black', empty: true, circular: true }}
        text='Discussion'
      />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleInput
