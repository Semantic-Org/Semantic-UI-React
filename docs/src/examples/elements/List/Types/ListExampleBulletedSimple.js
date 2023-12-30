import React from 'react'
import { ListList, ListItem, List } from 'semantic-ui-react'

const ListExampleBulletedSimple = () => (
  <List as='ul'>
    <ListItem as='li'>Gaining Access</ListItem>
    <ListItem as='li'>Inviting Friends</ListItem>
    <ListItem as='li'>
      Benefits
      <ListList as='ul'>
        <ListItem as='li'>
          <a href='#'>Link to somewhere</a>
        </ListItem>
        <ListItem as='li'>Rebates</ListItem>
        <ListItem as='li'>Discounts</ListItem>
      </ListList>
    </ListItem>
    <ListItem as='li'>Warranty</ListItem>
  </List>
)

export default ListExampleBulletedSimple
