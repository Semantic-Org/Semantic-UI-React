import React from 'react'
import { Image, List } from 'semantic-ui-react'

const ListExampleHorizontal = () => (
  <List horizontal>
    <List.Item>
      <Image avatar src='/images/avatar/small/tom.jpg' />
      <List.Content>
        <List.Header>Tom</List.Header>
        Top Contributor
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/christian.jpg' />
      <List.Content>
        <List.Header>Christian Rocha</List.Header>
        Admin
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/matt.jpg' />
      <List.Content>
        <List.Header>Matt</List.Header>
        Top Rated User
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleHorizontal
