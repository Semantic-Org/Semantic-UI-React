import React from 'react'
import {
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemContent,
  Item,
} from 'semantic-ui-react'

const ItemExampleRelaxed = () => (
  <ItemGroup relaxed>
    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />

      <ItemContent verticalAlign='middle'>
        <ItemHeader as='a'>12 Years a Slave</ItemHeader>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />

      <ItemContent verticalAlign='middle'>
        <ItemHeader as='a'>My Neighbor Totoro</ItemHeader>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />

      <ItemContent verticalAlign='middle'>
        <ItemHeader as='a'>Watchmen</ItemHeader>
      </ItemContent>
    </Item>
  </ItemGroup>
)

export default ItemExampleRelaxed
