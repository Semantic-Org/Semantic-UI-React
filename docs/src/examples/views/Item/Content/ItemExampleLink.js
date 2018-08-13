import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ItemExampleLink = () => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header>Arrowhead Valley Camp</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header>Buck's Homebrew Stayaway</Item.Header>
        <Item.Meta content='$1000 2 Weeks' />
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />
      <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' />
    </Item>
  </Item.Group>
)

export default ItemExampleLink
