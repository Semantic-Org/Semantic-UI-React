import React from 'react'
import { Icon, Item } from 'semantic-ui-react'

const ItemExampleRatings = () => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/images/avatar/large/jenny.jpg' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>
          <Icon name='like' />
          Veronika Ossi
        </Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/images/avatar/large/justen.jpg' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>
          <Icon name='favorite' />
          Justen Kitsune
        </Item.Header>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleRatings
