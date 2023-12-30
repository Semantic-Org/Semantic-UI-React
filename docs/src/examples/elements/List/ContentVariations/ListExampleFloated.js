import React from 'react'
import { ListItem, ListContent, Button, Image, List } from 'semantic-ui-react'

const ListExampleFloated = () => (
  <List divided verticalAlign='middle'>
    <ListItem>
      <ListContent floated='right'>
        <Button>Add</Button>
      </ListContent>
      <Image avatar src='/images/avatar/small/lena.png' />
      <ListContent>Lena</ListContent>
    </ListItem>
    <ListItem>
      <ListContent floated='right'>
        <Button>Add</Button>
      </ListContent>
      <Image avatar src='/images/avatar/small/lindsay.png' />
      <ListContent>Lindsay</ListContent>
    </ListItem>
    <ListItem>
      <ListContent floated='right'>
        <Button>Add</Button>
      </ListContent>
      <Image avatar src='/images/avatar/small/mark.png' />
      <ListContent>Mark</ListContent>
    </ListItem>
    <ListItem>
      <ListContent floated='right'>
        <Button>Add</Button>
      </ListContent>
      <Image avatar src='/images/avatar/small/molly.png' />
      <ListContent>Molly</ListContent>
    </ListItem>
  </List>
)

export default ListExampleFloated
