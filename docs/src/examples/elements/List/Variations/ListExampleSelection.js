import React from 'react'
import {
  ListItem,
  ListHeader,
  ListContent,
  Image,
  List,
} from 'semantic-ui-react'

const ListExampleSelection = () => (
  <List selection verticalAlign='middle'>
    <ListItem>
      <Image avatar src='/images/avatar/small/helen.jpg' />
      <ListContent>
        <ListHeader>Helen</ListHeader>
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/christian.jpg' />
      <ListContent>
        <ListHeader>Christian</ListHeader>
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/daniel.jpg' />
      <ListContent>
        <ListHeader>Daniel</ListHeader>
      </ListContent>
    </ListItem>
  </List>
)

export default ListExampleSelection
