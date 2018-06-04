import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleBulletedSimple = () => (
  <List as='ul'>
    <List.Item as='li'>Gaining Access</List.Item>
    <List.Item as='li'>Inviting Friends</List.Item>
    <List.Item as='li'>
      Benefits
      <List.List as='ul'>
        <List.Item as='li'>
          <a href='#'>Link to somewhere</a>
        </List.Item>
        <List.Item as='li'>Rebates</List.Item>
        <List.Item as='li'>Discounts</List.Item>
      </List.List>
    </List.Item>
    <List.Item as='li'>Warranty</List.Item>
  </List>
)

export default ListExampleBulletedSimple
