import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
  Icon,
} from 'semantic-ui-react'

const DropdownExampleFloatedContent = () => (
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
      <DropdownItem>
        <Icon name='attention' className='right floated' />
        Important
      </DropdownItem>
      <DropdownItem>
        <Icon name='comment' className='right floated' />
        Announcement
      </DropdownItem>
      <DropdownItem>
        <Icon name='conversation' className='right floated' />
        Discussion
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleFloatedContent
