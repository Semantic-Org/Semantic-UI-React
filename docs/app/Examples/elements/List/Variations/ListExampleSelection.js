import React from 'react'
import { Image, List } from 'stardust'

const ListExampleSelection = () => (
  <List selection verticalAlign='middle'>
    <List.Item>
      <Image avatar src='http://semantic-ui.com/images/avatar/small/helen.jpg' />
        <List.Content>
          <List.Header>Helen</List.Header>
        </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='http://semantic-ui.com/images/avatar/small/christian.jpg' />
        <List.Content>
          <List.Header>Christian</List.Header>
        </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='http://semantic-ui.com/images/avatar/small/daniel.jpg' />
        <List.Content>
          <List.Header>Daniel</List.Header>
        </List.Content>
    </List.Item>
  </List>
)

export default ListExampleSelection
