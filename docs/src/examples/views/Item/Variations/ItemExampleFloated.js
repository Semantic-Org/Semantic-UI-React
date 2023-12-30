import React from 'react'
import {
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemExtra,
  ItemDescription,
  ItemContent,
  Button,
  Image,
  Item,
} from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ItemExampleFloated = () => (
  <ItemGroup relaxed>
    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />

      <ItemContent verticalAlign='middle'>
        <ItemHeader>Content A</ItemHeader>
        <ItemDescription>{paragraph}</ItemDescription>
        <ItemExtra>
          <Button floated='right'>Action</Button>
        </ItemExtra>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />

      <ItemContent verticalAlign='middle'>
        <ItemHeader>Content B</ItemHeader>
        <ItemDescription>{paragraph}</ItemDescription>
        <ItemExtra>
          <Button floated='right'>Action</Button>
        </ItemExtra>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />

      <ItemContent verticalAlign='middle'>
        <ItemHeader>Content C</ItemHeader>
        <ItemDescription>{paragraph}</ItemDescription>
        <ItemExtra>
          <Button floated='right'>Action</Button>
        </ItemExtra>
      </ItemContent>
    </Item>
  </ItemGroup>
)

export default ItemExampleFloated
