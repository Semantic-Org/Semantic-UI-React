import React from 'react'
import { ListList, ListItem, List } from 'semantic-ui-react'

const ListExampleOrdered = () => (
  <List ordered>
    <ListItem as='a'>Getting Started</ListItem>
    <ListItem as='a'>Introduction</ListItem>
    <ListItem>
      <a>Languages</a>
      <ListList>
        <ListItem as='a'>HTML</ListItem>
        <ListItem as='a'>Javascript</ListItem>
        <ListItem as='a'>CSS</ListItem>
      </ListList>
    </ListItem>
    <ListItem as='a'>Review</ListItem>
  </List>
)

export default ListExampleOrdered
