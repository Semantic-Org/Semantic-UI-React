import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

const DropdownExampleFloatedContent = () => (
  <Dropdown
    text='Filter'
    icon='filter'
    floating
    labeled
    button
    className='icon'
  >
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Divider />
      <Dropdown.Item>
        <Icon name='attention' className='right floated' />
        Important
      </Dropdown.Item>
      <Dropdown.Item>
        <Icon name='comment' className='right floated' />
        Announcement
      </Dropdown.Item>
      <Dropdown.Item>
        <Icon name='conversation' className='right floated' />
        Discussion
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleFloatedContent
