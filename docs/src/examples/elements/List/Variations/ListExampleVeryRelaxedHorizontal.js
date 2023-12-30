import React from 'react'
import {
  ListItem,
  ListHeader,
  ListContent,
  Image,
  List,
} from 'semantic-ui-react'

const ListExampleVeryRelaxedHorizontal = () => (
  <List horizontal relaxed='very'>
    <ListItem>
      <Image avatar src='/images/avatar/small/daniel.jpg' />
      <ListContent>
        <ListHeader as='a'>Daniel Louise</ListHeader>
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/stevie.jpg' />
      <ListContent>
        <ListHeader as='a'>Stevie Feliciano</ListHeader>
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/elliot.jpg' />
      <ListContent>
        <ListHeader as='a'>Elliot Fu</ListHeader>
      </ListContent>
    </ListItem>
  </List>
)

export default ListExampleVeryRelaxedHorizontal
