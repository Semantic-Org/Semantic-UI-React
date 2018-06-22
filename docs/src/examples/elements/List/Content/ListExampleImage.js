import React from 'react'
import { List, Image } from 'semantic-ui-react'

const ListExampleImage = () => (
  <List>
    <List.Item>
      <Image avatar src='/images/avatar/small/rachel.png' />
      <List.Content>
        <List.Header as='a'>Rachel</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/lindsay.png' />
      <List.Content>
        <List.Header as='a'>Lindsay</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Bob's Burgers</b>
          </a>{' '}
          10 hours ago.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/matthew.png' />
      <List.Content>
        <List.Header as='a'>Matthew</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>The Godfather Part 2</b>
          </a>{' '}
          yesterday.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/jenny.jpg' />
      <List.Content>
        <List.Header as='a'>Jenny Hess</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Twin Peaks</b>
          </a>{' '}
          3 days ago.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/veronika.jpg' />
      <List.Content>
        <List.Header as='a'>Veronika Ossi</List.Header>
        <List.Description>Has not watched anything recently</List.Description>
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleImage
