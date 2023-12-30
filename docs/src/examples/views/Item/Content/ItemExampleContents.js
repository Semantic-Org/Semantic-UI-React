import React from 'react'
import { ItemImage, ItemGroup, ItemContent, Item } from 'semantic-ui-react'

const ItemExampleContents = () => (
  <ItemGroup divided>
    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />
      <ItemContent verticalAlign='middle'>Content A</ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />
      <ItemContent verticalAlign='middle'>Content B</ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />
      <ItemContent content='Content C' verticalAlign='middle' />
    </Item>
  </ItemGroup>
)

export default ItemExampleContents
