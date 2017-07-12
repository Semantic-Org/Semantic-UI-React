import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownExampleHeader = () => (
  <Dropdown text='Filter' icon='filter' floating labeled button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Item>Important</Dropdown.Item>
      <Dropdown.Item>Announcement</Dropdown.Item>
      <Dropdown.Item>Discussion</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleHeader
