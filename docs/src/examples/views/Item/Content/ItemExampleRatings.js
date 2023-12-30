import React from 'react'
import {
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemContent,
  Icon,
  Item,
} from 'semantic-ui-react'

const ItemExampleRatings = () => (
  <ItemGroup>
    <Item>
      <ItemImage size='tiny' src='/images/avatar/large/jenny.jpg' />

      <ItemContent verticalAlign='middle'>
        <ItemHeader>
          <Icon name='like' />
          Veronika Ossi
        </ItemHeader>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/avatar/large/justen.jpg' />

      <ItemContent verticalAlign='middle'>
        <ItemHeader>
          <Icon name='favorite' />
          Justen Kitsune
        </ItemHeader>
      </ItemContent>
    </Item>
  </ItemGroup>
)

export default ItemExampleRatings
