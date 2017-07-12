import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleLinkComplex = () => (
  <List>
    <List.Item>
      <List.Header as='a'>Header</List.Header>
      <List.Description>
        Click a link in our <a>description</a>.
      </List.Description>
    </List.Item>
    <List.Item>
      <List.Header as='a'>Learn More</List.Header>
      <List.Description>
        Learn more about this site on <a>our FAQ page</a>.
      </List.Description>
    </List.Item>
  </List>
)

export default ListExampleLinkComplex
