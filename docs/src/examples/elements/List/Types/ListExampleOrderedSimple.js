import React from 'react'
import { ListList, ListItem, List } from 'semantic-ui-react'

const ListExampleOrderedSimple = () => (
  <List as='ol'>
    <ListItem as='li'>Signing Up</ListItem>
    <ListItem as='li'>User Benefits</ListItem>
    <ListItem as='li'>
      User Types
      <ListList as='ol'>
        <ListItem as='li'>Admin</ListItem>
        <ListItem as='li'>Power User</ListItem>
        <ListItem as='li'>Regular User</ListItem>
      </ListList>
    </ListItem>
    <ListItem as='li'>Deleting Your Account</ListItem>
  </List>
)

export default ListExampleOrderedSimple
