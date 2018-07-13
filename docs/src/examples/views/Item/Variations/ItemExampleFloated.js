import React from 'react'
import { Button, Image, Item } from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ItemExampleFloated = () => (
  <Item.Group relaxed>
    <Item>
      <Item.Image size='small' src='/images/wireframe/image.png' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>Content A</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button floated='right'>Action</Button>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='/images/wireframe/image.png' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>Content B</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button floated='right'>Action</Button>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='/images/wireframe/image.png' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>Content C</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button floated='right'>Action</Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleFloated
