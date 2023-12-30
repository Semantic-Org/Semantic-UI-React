import React from 'react'
import {
  ListItem,
  ListIcon,
  ListHeader,
  ListDescription,
  ListContent,
  List,
} from 'semantic-ui-react'

const ListExampleDescription = () => (
  <List>
    <ListItem>
      <ListIcon name='marker' />
      <ListContent>
        <ListHeader as='a'>Krowlewskie Jadlo</ListHeader>
        <ListDescription>
          An excellent polish restaurant, quick delivery and hearty, filling
          meals.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='marker' />
      <ListContent>
        <ListHeader as='a'>Xian Famous Foods</ListHeader>
        <ListDescription>
          A taste of Shaanxi's delicious culinary traditions, with delights like
          spicy cold noodles and lamb burgers.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='marker' />
      <ListContent>
        <ListHeader as='a'>Sapporo Haru</ListHeader>
        <ListDescription>
          Greenpoint's best choice for quick and delicious sushi.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <ListIcon name='marker' />
      <ListContent>
        <ListHeader as='a'>Enid's</ListHeader>
        <ListDescription>
          At night a bar, during the day a delicious brunch spot.
        </ListDescription>
      </ListContent>
    </ListItem>
  </List>
)

export default ListExampleDescription
