import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleHorizontalBulleted = () => (
  <List bulleted horizontal link>
    <List.Item as='a'>Terms and Conditions</List.Item>
    <List.Item as='a'>Privacy Policy</List.Item>
    <List.Item as='a'>Contact Us</List.Item>
  </List>
)

export default ListExampleHorizontalBulleted
