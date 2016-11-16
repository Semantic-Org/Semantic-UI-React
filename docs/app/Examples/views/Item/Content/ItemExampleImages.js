import React from 'react'
import { Item } from 'semantic-ui-react'

const ItemExampleImages = () => (
  <Item.Group divided>
    <Item>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
    </Item>

    <Item>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
    </Item>

    <Item image='http://semantic-ui.com/images/wireframe/image.png' />
  </Item.Group>
)

export default ItemExampleImages
