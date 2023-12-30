import React from 'react'
import {
  ListItem,
  ListHeader,
  ListContent,
  Image,
  List,
} from 'semantic-ui-react'

const ListExampleHorizontal = () => (
  <List horizontal>
    <ListItem>
      <Image avatar src='/images/avatar/small/tom.jpg' />
      <ListContent>
        <ListHeader>Tom</ListHeader>
        Top Contributor
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/christian.jpg' />
      <ListContent>
        <ListHeader>Christian Rocha</ListHeader>
        Admin
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/matt.jpg' />
      <ListContent>
        <ListHeader>Matt</ListHeader>
        Top Rated User
      </ListContent>
    </ListItem>
  </List>
)

export default ListExampleHorizontal
