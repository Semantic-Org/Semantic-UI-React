import React from 'react'
import { Image, List } from 'semantic-ui-react'

const ListExampleVeryRelaxed = () => (
  <List relaxed='very'>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header as='a'>Daniel Louise</List.Header>
        <List.Description>Last seen watching <a><b>Arrested Development</b></a> just now.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/stevie.jpg' />
      <List.Content>
        <List.Header as='a'>Stevie Feliciano</List.Header>
        <List.Description>Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/elliot.jpg' />
      <List.Content>
        <List.Header as='a'>Elliot Fu</List.Header>
        <List.Description>Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</List.Description>
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleVeryRelaxed
