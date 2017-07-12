import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleLink = () => (
  <List link>
    <List.Item active>Home</List.Item>
    <List.Item as='a'>About</List.Item>
    <List.Item as='a'>Jobs</List.Item>
    <List.Item as='a'>Team</List.Item>
  </List>
)

export default ListExampleLink
