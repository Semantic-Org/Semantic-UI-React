import React from 'react'
import { Button, Dropdown } from 'semantic-ui-react'

const DropdownExampleFloating = () => (
  <Button.Group color='teal'>
    <Button>Save</Button>
    <Dropdown floating button className='icon'>
      <Dropdown.Menu>
        <Dropdown.Item icon='edit' text='Edit Post' />
        <Dropdown.Item icon='delete' text='Remove Post' />
        <Dropdown.Item icon='hide' text='Hide Post' />
      </Dropdown.Menu>
    </Dropdown>
  </Button.Group>
)

export default DropdownExampleFloating
