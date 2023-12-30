import React from 'react'
import {
  ListItem,
  ListIcon,
  ListHeader,
  ListDescription,
  ListContent,
  List,
} from 'semantic-ui-react'

const ListExampleDivided = () => (
  <List divided relaxed>
    <ListItem>
      <ListIcon name='github' size='large' verticalAlign='middle' />
      <ListContent>
        <ListHeader as='a'>Semantic-Org/Semantic-UI</ListHeader>
        <ListDescription as='a'>Updated 10 mins ago</ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='github' size='large' verticalAlign='middle' />
      <ListContent>
        <ListHeader as='a'>Semantic-Org/Semantic-UI-Docs</ListHeader>
        <ListDescription as='a'>Updated 22 mins ago</ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='github' size='large' verticalAlign='middle' />
      <ListContent>
        <ListHeader as='a'>Semantic-Org/Semantic-UI-Meteor</ListHeader>
        <ListDescription as='a'>Updated 34 mins ago</ListDescription>
      </ListContent>
    </ListItem>
  </List>
)

export default ListExampleDivided
