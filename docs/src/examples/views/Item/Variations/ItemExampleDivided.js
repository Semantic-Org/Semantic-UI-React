import React from 'react'
import {
  ItemMeta,
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemExtra,
  ItemDescription,
  ItemContent,
  Button,
  Icon,
  Image,
  Item,
  Label,
} from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ItemExampleDivided = () => (
  <ItemGroup divided>
    <Item>
      <ItemImage src='/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader as='a'>12 Years a Slave</ItemHeader>
        <ItemMeta>
          <span className='cinema'>Union Square 14</span>
        </ItemMeta>
        <ItemDescription>{paragraph}</ItemDescription>
        <ItemExtra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </ItemExtra>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage src='/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader as='a'>My Neighbor Totoro</ItemHeader>
        <ItemMeta>
          <span className='cinema'>IFC Cinema</span>
        </ItemMeta>
        <ItemDescription>{paragraph}</ItemDescription>
        <ItemExtra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
          <Label>Limited</Label>
        </ItemExtra>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage src='/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader as='a'>Watchmen</ItemHeader>
        <ItemMeta>
          <span className='cinema'>IFC</span>
        </ItemMeta>
        <ItemDescription>{paragraph}</ItemDescription>
        <ItemExtra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
        </ItemExtra>
      </ItemContent>
    </Item>
  </ItemGroup>
)

export default ItemExampleDivided
