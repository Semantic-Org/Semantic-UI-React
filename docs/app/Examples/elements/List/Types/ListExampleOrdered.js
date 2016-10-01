import React from 'react'
import { List } from 'stardust'

const ListExampleOrdered = () => (
  <List className='ordered'>
    <List.Item description='Apples'>
      <List>
        <List.Item description='Fuji' />
        <List.Item description='Granny Smith' />
        <List.Item description='Honeycrisp' />
      </List>
    </List.Item>
    <List.Item description='Pears' />
    <List.Item description='Oranges' />
  </List>
)

export default ListExampleOrdered
