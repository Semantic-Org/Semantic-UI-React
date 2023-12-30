import React from 'react'
import { ListItem, ListHeader, List } from 'semantic-ui-react'

const ListExampleHeader = () => (
  <List>
    <ListItem>
      <ListHeader>New York City</ListHeader>A lovely city
    </ListItem>
    <ListItem>
      <ListHeader>Chicago</ListHeader>
      Also quite a lovely city
    </ListItem>
    <ListItem>
      <ListHeader>Los Angeles</ListHeader>
      Sometimes can be a lovely city
    </ListItem>
    <ListItem>
      <ListHeader>San Francisco</ListHeader>
      What a lovely city
    </ListItem>
  </List>
)

export default ListExampleHeader
