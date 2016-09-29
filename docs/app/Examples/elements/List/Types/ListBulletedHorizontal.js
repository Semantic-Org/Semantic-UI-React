import React from 'react'
import { List } from 'stardust'

const ListBulletedHorizontal = () => {
  return (
    <List bulleted horizontal>
      <List.Item as='a'>About Us</List.Item>
      <List.Item as='a'>Sitemap</List.Item>
      <List.Item as='a'>Contact</List.Item>
    </List>
  )
}

export default ListBulletedHorizontal
