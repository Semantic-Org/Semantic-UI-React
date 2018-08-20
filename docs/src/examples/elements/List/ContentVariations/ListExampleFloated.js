import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'

const ListExampleFloated = () => (
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/lena.png' />
      <List.Content>Lena</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/lindsay.png' />
      <List.Content>Lindsay</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/mark.png' />
      <List.Content>Mark</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/molly.png' />
      <List.Content>Molly</List.Content>
    </List.Item>
  </List>
)

export default ListExampleFloated
