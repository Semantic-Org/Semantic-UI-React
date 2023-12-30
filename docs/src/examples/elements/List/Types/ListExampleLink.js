import React from 'react'
import { ListItem, List } from 'semantic-ui-react'

const ListExampleLink = () => (
  <List link>
    <ListItem active>Home</ListItem>
    <ListItem as='a'>About</ListItem>
    <ListItem as='a'>Jobs</ListItem>
    <ListItem as='a'>Team</ListItem>
  </List>
)

export default ListExampleLink
