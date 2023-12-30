import React from 'react'
import { DropdownMenu, Dropdown, Message } from 'semantic-ui-react'

const DropdownExampleMessage = () => (
  <Dropdown text='Login' icon='filter' floating labeled button className='icon'>
    <DropdownMenu>
      <Message
        error
        header='Error'
        content='You must log-in to see all categories'
      />
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleMessage
