import React from 'react'
import { Icon, Image as ImageComponent, Item } from 'semantic-ui-react'

const paragraph = <ImageComponent src='/assets/images/wireframe/short-paragraph.png' />

const ItemExampleExtraContent = () => (
  <Item.Group>
    <Item>
      <Item.Image size='small' src='/assets/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Cute Dog</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Icon color='green' name='check' /> 121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='/assets/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Cute Dog</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra content='121 Votes' />
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='/assets/images/wireframe/image.png' />
      <Item.Content header='Cute Dog' extra='121 Votes' />
    </Item>
  </Item.Group>
)

export default ItemExampleExtraContent
