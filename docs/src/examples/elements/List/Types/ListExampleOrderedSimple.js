import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleOrderedSimple = () => (
  <List as='ol'>
    <List.Item as='li'>Signing Up</List.Item>
    <List.Item as='li'>User Benefits</List.Item>
    <List.Item as='li'>
      User Types
      <List.List as='ol'>
        <List.Item as='li'>Admin</List.Item>
        <List.Item as='li'>Power User</List.Item>
        <List.Item as='li'>Regular User</List.Item>
      </List.List>
    </List.Item>
    <List.Item as='li'>Deleting Your Account</List.Item>
  </List>
)

export default ListExampleOrderedSimple
