import React from 'react'
import {
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemExtra,
  ItemDescription,
  ItemContent,
  Icon,
  Image,
  Item,
} from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ItemExampleExtraContent = () => (
  <ItemGroup>
    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader as='a'>Cute Dog</ItemHeader>
        <ItemDescription>{paragraph}</ItemDescription>
        <ItemExtra>
          <Icon color='green' name='check' /> 121 Votes
        </ItemExtra>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader as='a'>Cute Dog</ItemHeader>
        <ItemDescription>{paragraph}</ItemDescription>
        <ItemExtra content='121 Votes' />
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />
      <ItemContent header='Cute Dog' extra='121 Votes' />
    </Item>
  </ItemGroup>
)

export default ItemExampleExtraContent
