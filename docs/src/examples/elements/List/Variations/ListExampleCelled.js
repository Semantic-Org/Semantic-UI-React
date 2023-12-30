import React from 'react'
import {
  ListItem,
  ListHeader,
  ListContent,
  Image,
  List,
} from 'semantic-ui-react'

const ListExampleCelled = () => (
  <List celled>
    <ListItem>
      <Image avatar src='/images/avatar/small/helen.jpg' />
      <ListContent>
        <ListHeader>Snickerdoodle</ListHeader>
        An excellent companion
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/daniel.jpg' />
      <ListContent>
        <ListHeader>Poodle</ListHeader>A poodle, it's pretty basic
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/daniel.jpg' />
      <ListContent>
        <ListHeader>Paulo</ListHeader>
        He's also a dog
      </ListContent>
    </ListItem>
  </List>
)

export default ListExampleCelled
