import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
} from 'semantic-ui-react'

const DropdownExampleLabel = () => (
  <Dropdown
    text='Filter'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <DropdownMenu>
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

export default DropdownExampleLabel
