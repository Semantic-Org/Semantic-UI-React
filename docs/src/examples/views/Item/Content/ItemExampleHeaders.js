import React from 'react'
import {
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemContent,
  Item,
} from 'semantic-ui-react'

const ItemExampleHeaders = () => (
  <ItemGroup>
    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />
      <ItemContent verticalAlign='middle'>
        <ItemHeader as='a'>12 Years a Slave</ItemHeader>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />
      <ItemContent verticalAlign='middle'>
        <ItemHeader as='a' content='My Neighbor Totoro' />
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />
      <ItemContent header='Watchmen' verticalAlign='middle' />
    </Item>
  </ItemGroup>
)

export default ItemExampleHeaders
