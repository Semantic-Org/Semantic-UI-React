import React from 'react'
import { Image, List } from 'semantic-ui-react'

const ListExampleCelled = () => (
  <List celled>
    <List.Item>
      <Image avatar src='/images/avatar/small/helen.jpg' />
      <List.Content>
        <List.Header>Snickerdoodle</List.Header>
        An excellent companion
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header>Poodle</List.Header>A poodle, it's pretty basic
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header>Paulo</List.Header>
        He's also a dog
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleCelled
