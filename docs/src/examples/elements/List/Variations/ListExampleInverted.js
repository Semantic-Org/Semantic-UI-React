import React from 'react'
import {
  ListItem,
  ListHeader,
  ListContent,
  List,
  Segment,
} from 'semantic-ui-react'

const ListExampleInverted = () => (
  <Segment inverted>
    <List divided inverted relaxed>
      <ListItem>
        <ListContent>
          <ListHeader>Snickerdoodle</ListHeader>
          An excellent companion
        </ListContent>
      </ListItem>
      <ListItem>
        <ListContent>
          <ListHeader>Poodle</ListHeader>A poodle, its pretty basic
        </ListContent>
      </ListItem>
      <ListItem>
        <ListContent>
          <ListHeader>Paulo</ListHeader>
          He's also a dog
        </ListContent>
      </ListItem>
    </List>
  </Segment>
)

export default ListExampleInverted
