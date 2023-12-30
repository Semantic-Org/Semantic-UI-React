import React from 'react'
import { ListItem, ListIcon, ListContent, List } from 'semantic-ui-react'

const ListExampleIcon = () => (
  <List>
    <ListItem>
      <ListIcon name='users' />
      <ListContent>Semantic UI</ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='marker' />
      <ListContent>New York, NY</ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='mail' />
      <ListContent>
        <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
      </ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='linkify' />
      <ListContent>
        <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
      </ListContent>
    </ListItem>
  </List>
)

export default ListExampleIcon
