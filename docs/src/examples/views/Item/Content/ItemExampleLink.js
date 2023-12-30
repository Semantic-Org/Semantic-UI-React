import React from 'react'
import {
  ItemMeta,
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemDescription,
  ItemContent,
  Image,
  Item,
} from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ItemExampleLink = () => (
  <ItemGroup>
    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader>Arrowhead Valley Camp</ItemHeader>
        <ItemMeta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </ItemMeta>
        <ItemDescription>{paragraph}</ItemDescription>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader>Buck's Homebrew Stayaway</ItemHeader>
        <ItemMeta content='$1000 2 Weeks' />
        <ItemDescription>{paragraph}</ItemDescription>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/wireframe/image.png' />
      <ItemContent header='Arrowhead Valley Camp' meta='$1200 1 Month' />
    </Item>
  </ItemGroup>
)

export default ItemExampleLink
