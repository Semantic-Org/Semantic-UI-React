import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleOrdered = () => (
  <List ordered>
    <List.Item as='a'>Getting Started</List.Item>
    <List.Item as='a'>Introduction</List.Item>
    <List.Item>
      <a>Languages</a>
      <List.List>
        <List.Item as='a'>HTML</List.Item>
        <List.Item as='a'>Javascript</List.Item>
        <List.Item as='a'>CSS</List.Item>
      </List.List>
    </List.Item>
    <List.Item as='a'>Review</List.Item>
  </List>
)

export default ListExampleOrdered
