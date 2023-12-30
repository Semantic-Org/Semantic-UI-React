import React from 'react'
import { ListItem, List } from 'semantic-ui-react'

const ListExampleHorizontalBulleted = () => (
  <List bulleted horizontal link>
    <ListItem as='a'>Terms and Conditions</ListItem>
    <ListItem as='a'>Privacy Policy</ListItem>
    <ListItem as='a'>Contact Us</ListItem>
  </List>
)

export default ListExampleHorizontalBulleted
