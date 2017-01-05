import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleIcon = () => (
  <Dropdown text='Filter' floating labeled button className='icon'>
    {/* <i class="filter icon"></i> */}
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Divider />
      <Dropdown.Item icon='attention' text='Important' />
      <Dropdown.Item icon='comment' text='Announcement' />
      <Dropdown.Item icon='conversation' text='Discussion' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleIcon
