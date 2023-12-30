import React from 'react'
import { ListItem, ListHeader, ListDescription, List } from 'semantic-ui-react'

const ListExampleLinkComplex = () => (
  <List>
    <ListItem>
      <ListHeader as='a'>Header</ListHeader>
      <ListDescription>
        Click a link in our <a>description</a>.
      </ListDescription>
    </ListItem>
    <ListItem>
      <ListHeader as='a'>Learn More</ListHeader>
      <ListDescription>
        Learn more about this site on <a>our FAQ page</a>.
      </ListDescription>
    </ListItem>
  </List>
)

export default ListExampleLinkComplex
