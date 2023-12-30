import React from 'react'
import {
  ListItem,
  ListHeader,
  ListDescription,
  ListContent,
  Image,
  List,
} from 'semantic-ui-react'

const ListExampleRelaxed = () => (
  <List relaxed>
    <ListItem>
      <Image avatar src='/images/avatar/small/daniel.jpg' />
      <ListContent>
        <ListHeader as='a'>Daniel Louise</ListHeader>
        <ListDescription>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/stevie.jpg' />
      <ListContent>
        <ListHeader as='a'>Stevie Feliciano</ListHeader>
        <ListDescription>
          Last seen watching{' '}
          <a>
            <b>Bob's Burgers</b>
          </a>{' '}
          10 hours ago.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/elliot.jpg' />
      <ListContent>
        <ListHeader as='a'>Elliot Fu</ListHeader>
        <ListDescription>
          Last seen watching{' '}
          <a>
            <b>The Godfather Part 2</b>
          </a>{' '}
          yesterday.
        </ListDescription>
      </ListContent>
    </ListItem>
  </List>
)

export default ListExampleRelaxed
