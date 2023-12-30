import React from 'react'
import { ListList, ListItem, List } from 'semantic-ui-react'

const ListExampleCelledOrdered = () => (
  <List celled ordered>
    <ListItem>Cats</ListItem>
    <ListItem>Horses</ListItem>
    <ListItem>
      Dogs
      <ListList>
        <ListItem>Labradoodles</ListItem>
        <ListItem>Shiba Inu</ListItem>
        <ListItem>Mastiff</ListItem>
      </ListList>
    </ListItem>
  </List>
)

export default ListExampleCelledOrdered
