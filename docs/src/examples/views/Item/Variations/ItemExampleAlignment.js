import React from 'react'
import {
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemContent,
  Item,
} from 'semantic-ui-react'

const ItemExampleAlignment = () => (
  <ItemGroup>
    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />

      <ItemContent verticalAlign='top'>
        <ItemHeader>Top Aligned</ItemHeader>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />

      <ItemContent verticalAlign='middle'>
        <ItemHeader>Middle Aligned</ItemHeader>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />

      <ItemContent verticalAlign='bottom'>
        <ItemHeader>Bottom Aligned</ItemHeader>
      </ItemContent>
    </Item>
  </ItemGroup>
)

export default ItemExampleAlignment
