import React from 'react'
import { ItemImage, ItemGroup, Item } from 'semantic-ui-react'

const ItemExampleImages = () => (
  <ItemGroup divided unstackable>
    <Item>
      <ItemImage src='/images/wireframe/image.png' />
    </Item>

    <Item>
      <ItemImage src='/images/wireframe/image.png' />
    </Item>

    <Item image='/images/wireframe/image.png' />
  </ItemGroup>
)

export default ItemExampleImages
