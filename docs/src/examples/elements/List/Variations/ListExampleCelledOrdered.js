import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleCelledOrdered = () => (
  <List celled ordered>
    <List.Item>Cats</List.Item>
    <List.Item>Horses</List.Item>
    <List.Item>
      Dogs
      <List.List>
        <List.Item>Labradoodles</List.Item>
        <List.Item>Shiba Inu</List.Item>
        <List.Item>Mastiff</List.Item>
      </List.List>
    </List.Item>
  </List>
)

export default ListExampleCelledOrdered
