import React from 'react'
import { Image as ImageComponent, Item } from 'semantic-ui-react'

const paragraph = <ImageComponent src='/images/wireframe/short-paragraph.png' />

const ItemExampleLink = () => (
  <Item.Group link>
    <Item>
      <Item.Image size='tiny' src='/images/avatar/large/stevie.jpg' />

      <Item.Content>
        <Item.Header>Stevie Feliciano</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/images/avatar/large/veronika.jpg' />

      <Item.Content>
        <Item.Header>Veronika Ossi</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/images/avatar/large/jenny.jpg' />

      <Item.Content>
        <Item.Header>Jenny Hess</Item.Header>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleLink
