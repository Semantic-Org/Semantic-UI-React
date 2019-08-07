import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const ListExampleInverted = () => (
  <Segment inverted>
    <List divided inverted relaxed>
      <List.Item>
        <List.Content>
          <List.Header>Snickerdoodle</List.Header>
          An excellent companion
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Poodle</List.Header>A poodle, its pretty basic
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Paulo</List.Header>
          He's also a dog
        </List.Content>
      </List.Item>
    </List>
  </Segment>
)

export default ListExampleInverted
