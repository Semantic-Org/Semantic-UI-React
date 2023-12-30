import React from 'react'
import { ListItem, List } from 'semantic-ui-react'

const ListExampleOrderedValue = () => (
  <List as='ol'>
    <ListItem as='li' value='*'>
      Signing Up
    </ListItem>
    <ListItem as='li' value='*'>
      User Benefits
    </ListItem>
    <ListItem as='li' value='*'>
      User Types
      <ListItem as='ol'>
        <ListItem as='li' value='-'>
          Admin
        </ListItem>
        <ListItem as='li' value='-'>
          Power User
        </ListItem>
        <ListItem as='li' value='-'>
          Regular User
        </ListItem>
      </ListItem>
    </ListItem>
    <ListItem as='li' value='*'>
      Deleting Your Account
    </ListItem>
  </List>
)

export default ListExampleOrderedValue
