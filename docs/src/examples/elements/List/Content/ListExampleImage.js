import React from 'react'
import {
  ListItem,
  ListHeader,
  ListDescription,
  ListContent,
  List,
  Image,
} from 'semantic-ui-react'

const ListExampleImage = () => (
  <List>
    <ListItem>
      <Image avatar src='/images/avatar/small/rachel.png' />
      <ListContent>
        <ListHeader as='a'>Rachel</ListHeader>
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
      <Image avatar src='/images/avatar/small/lindsay.png' />
      <ListContent>
        <ListHeader as='a'>Lindsay</ListHeader>
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
      <Image avatar src='/images/avatar/small/matthew.png' />
      <ListContent>
        <ListHeader as='a'>Matthew</ListHeader>
        <ListDescription>
          Last seen watching{' '}
          <a>
            <b>The Godfather Part 2</b>
          </a>{' '}
          yesterday.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/jenny.jpg' />
      <ListContent>
        <ListHeader as='a'>Jenny Hess</ListHeader>
        <ListDescription>
          Last seen watching{' '}
          <a>
            <b>Twin Peaks</b>
          </a>{' '}
          3 days ago.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <Image avatar src='/images/avatar/small/veronika.jpg' />
      <ListContent>
        <ListHeader as='a'>Veronika Ossi</ListHeader>
        <ListDescription>Has not watched anything recently</ListDescription>
      </ListContent>
    </ListItem>
  </List>
)

export default ListExampleImage
