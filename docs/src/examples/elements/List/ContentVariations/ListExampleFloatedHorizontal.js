import React from 'react'
import { ListItem, List } from 'semantic-ui-react'

const ListExampleFloatedHorizontal = () => (
  <div>
    <List floated='right' horizontal>
      <ListItem disabled href='#'>
        © GitHub, Inc.
      </ListItem>
      <ListItem href='#'>Terms</ListItem>
      <ListItem href='#'>Privacy</ListItem>
      <ListItem href='#'>Contact</ListItem>
    </List>

    <List horizontal>
      <ListItem href='#'>About Us</ListItem>
      <ListItem href='#'>Jobs</ListItem>
    </List>
  </div>
)

export default ListExampleFloatedHorizontal
