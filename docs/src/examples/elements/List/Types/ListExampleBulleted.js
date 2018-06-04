import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleBulleted = () => (
  <List bulleted>
    <List.Item>Gaining Access</List.Item>
    <List.Item>Inviting Friends</List.Item>
    <List.Item>
      Benefits
      <List.List>
        <List.Item href='#'>Link to somewhere</List.Item>
        <List.Item>Rebates</List.Item>
        <List.Item>Discounts</List.Item>
      </List.List>
    </List.Item>
    <List.Item>Warranty</List.Item>
  </List>
)

export default ListExampleBulleted
