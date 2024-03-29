import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
  Input,
} from 'semantic-ui-react'

const tagOptions = [
  {
    key: 'Important',
    text: 'Important',
    value: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'Announcement',
    text: 'Announcement',
    value: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Cannot Fix',
    text: 'Cannot Fix',
    value: 'Cannot Fix',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    key: 'News',
    text: 'News',
    value: 'News',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    key: 'Enhancement',
    text: 'Enhancement',
    value: 'Enhancement',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    key: 'Change Declined',
    text: 'Change Declined',
    value: 'Change Declined',
    label: { empty: true, circular: true },
  },
  {
    key: 'Off Topic',
    text: 'Off Topic',
    value: 'Off Topic',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    key: 'Interesting',
    text: 'Interesting',
    value: 'Interesting',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    key: 'Discussion',
    text: 'Discussion',
    value: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]

const DropdownExampleSearchInMenu = () => (
  <Dropdown
    text='Filter Posts'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <DropdownMenu>
      <Input icon='search' iconPosition='left' className='search' />
      <DropdownDivider />
      <DropdownHeader icon='tags' content='Tag Label' />
      <DropdownMenu scrolling>
        {tagOptions.map((option) => (
          <DropdownItem key={option.value} {...option} />
        ))}
      </DropdownMenu>
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleSearchInMenu
