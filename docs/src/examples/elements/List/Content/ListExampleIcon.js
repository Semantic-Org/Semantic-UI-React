import React from 'react'
import {
  ListItem,
  ListHeader,
  ListDescription,
  ListContent,
  Icon,
  List,
} from 'semantic-ui-react'

const ListExampleIcon = () => (
  <List>
    <ListItem as='a'>
      <Icon name='help' />
      <ListContent>
        <ListHeader>Floated Icon</ListHeader>
        <ListDescription>
          This text will always have a left margin to make sure it sits
          alongside your icon
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem as='a'>
      <Icon name='right triangle' />
      <ListContent>
        <ListHeader>Icon Alignment</ListHeader>
        <ListDescription>
          Floated icons are by default top aligned. To have an icon top aligned
          try this example.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <Icon name='help' />
      Inline Text
    </ListItem>
  </List>
)

export default ListExampleIcon
