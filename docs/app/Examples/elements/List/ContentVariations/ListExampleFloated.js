import React from 'react'
import { Button, Image, List } from 'stardust'

const ListExampleFloated = () => (
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='http://semantic-ui.com/images/avatar2/small/lena.png' />
      <List.Content>
        Lena
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='http://semantic-ui.com/images/avatar2/small/lindsay.png' />
      <List.Content>
        Lindsay
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='http://semantic-ui.com/images/avatar2/small/mark.png' />
      <List.Content>
        Mark
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='http://semantic-ui.com/images/avatar2/small/molly.png' />
      <List.Content>
        Molly
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleFloated
