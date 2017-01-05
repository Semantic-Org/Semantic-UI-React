import React from 'react'
import { Dropdown, Message } from 'semantic-ui-react'

const DropdownExampleMessage = () => (
  <Dropdown text='Login' floating labeled button className='icon'>
    {/* <i class="filter icon"></i> */}
    <Dropdown.Menu>
      <Message error header='Error' content='You must log-in to see all categories' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleMessage
