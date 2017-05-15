import React from 'react'
import { Item } from 'semantic-ui-react'

const ItemExampleImages = () => (
  <Item.Group divided>
    <Item>
      <Item.Image src='/assets/images/wireframe/image.png' />
    </Item>

    <Item>
      <Item.Image src='/assets/images/wireframe/image.png' />
    </Item>

    <Item image='/assets/images/wireframe/image.png' />
  </Item.Group>
)

export default ItemExampleImages
