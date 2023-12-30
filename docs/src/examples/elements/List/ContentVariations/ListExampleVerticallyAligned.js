import React from 'react'
import { ListItem, ListContent, Image, List } from 'semantic-ui-react'

const ListExampleVerticallyAligned = () => (
  <List horizontal>
    <ListItem>
      <Image avatar src='/images/wireframe/square-image.png' />
      <ListContent verticalAlign='top'>Top Aligned</ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/wireframe/square-image.png' />
      <ListContent verticalAlign='middle'>Middle</ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/wireframe/square-image.png' />
      <ListContent verticalAlign='bottom'>Bottom</ListContent>
    </ListItem>
  </List>
)

export default ListExampleVerticallyAligned
