import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleFloatedHorizontal = () => (
  <div>
    <List floated='right' horizontal>
      <List.Item disabled href='#'>
        © GitHub, Inc.
      </List.Item>
      <List.Item href='#'>Terms</List.Item>
      <List.Item href='#'>Privacy</List.Item>
      <List.Item href='#'>Contact</List.Item>
    </List>

    <List horizontal>
      <List.Item href='#'>About Us</List.Item>
      <List.Item href='#'>Jobs</List.Item>
    </List>
  </div>
)

export default ListExampleFloatedHorizontal
