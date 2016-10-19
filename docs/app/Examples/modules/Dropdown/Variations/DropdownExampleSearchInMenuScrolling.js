import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const DropdownExampleSearchInMenuScrolling = () => (
  <Dropdown text='Filter Posts'>
    {/* <i class="filter icon"></i> */}
    <Dropdown.Menu>
      <Input icon='search' iconPosition='left' className='search' />
      <Dropdown.Divider />
      <Dropdown.Header icon='tags' content='Tag Label' />
      <Dropdown.Menu scrolling>
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
          text='Cannot Fix'
        />
        <Dropdown.Item
          label={{ color: 'purple', empty: true, circular: true }}
          text='News'
        />
        <Dropdown.Item
          label={{ color: 'orange', empty: true, circular: true }}
          text='Enhancement'
        />
        <Dropdown.Item
          label={{ color: 'bbb', empty: true, circular: true }}
          text='Change Declined'
        />
        <Dropdown.Item
          label={{ color: 'yellow', empty: true, circular: true }}
          text='Off Topic'
        />
        <Dropdown.Item
          label={{ color: 'pink', empty: true, circular: true }}
          text='Interesting'
        />
        <Dropdown.Item
          label={{ color: 'green', empty: true, circular: true }}
          text='Discussion'
        />
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleSearchInMenuScrolling
