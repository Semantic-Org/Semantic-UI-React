import React from 'react'
import { ListList, ListItem, List } from 'semantic-ui-react'

const ListExampleBulleted = () => (
  <List bulleted>
    <ListItem>Gaining Access</ListItem>
    <ListItem>Inviting Friends</ListItem>
    <ListItem>
      Benefits
      <ListList>
        <ListItem href='#'>Link to somewhere</ListItem>
        <ListItem>Rebates</ListItem>
        <ListItem>Discounts</ListItem>
      </ListList>
    </ListItem>
    <ListItem>Warranty</ListItem>
  </List>
)

export default ListExampleBulleted
