import React from 'react'
import {
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemDescription,
  ItemContent,
  Image as ImageComponent,
  Item,
} from 'semantic-ui-react'

const paragraph = <ImageComponent src='/images/wireframe/short-paragraph.png' />

const ItemExampleLink = () => (
  <ItemGroup link>
    <Item>
      <ItemImage size='tiny' src='/images/avatar/large/stevie.jpg' />

      <ItemContent>
        <ItemHeader>Stevie Feliciano</ItemHeader>
        <ItemDescription>{paragraph}</ItemDescription>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/avatar/large/veronika.jpg' />

      <ItemContent>
        <ItemHeader>Veronika Ossi</ItemHeader>
        <ItemDescription>{paragraph}</ItemDescription>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='tiny' src='/images/avatar/large/jenny.jpg' />

      <ItemContent>
        <ItemHeader>Jenny Hess</ItemHeader>
        <ItemDescription>{paragraph}</ItemDescription>
      </ItemContent>
    </Item>
  </ItemGroup>
)

export default ItemExampleLink
