import React from 'react'
import {
  ItemMeta,
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemExtra,
  ItemDescription,
  ItemContent,
  Image,
  Item,
} from 'semantic-ui-react'

const ItemExampleItems = () => (
  <ItemGroup>
    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader as='a'>Header</ItemHeader>
        <ItemMeta>Description</ItemMeta>
        <ItemDescription>
          <Image src='/images/wireframe/short-paragraph.png' />
        </ItemDescription>
        <ItemExtra>Additional Details</ItemExtra>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader as='a'>Header</ItemHeader>
        <ItemMeta>Description</ItemMeta>
        <ItemDescription>
          <Image src='/images/wireframe/short-paragraph.png' />
        </ItemDescription>
        <ItemExtra>Additional Details</ItemExtra>
      </ItemContent>
    </Item>
  </ItemGroup>
)

export default ItemExampleItems
