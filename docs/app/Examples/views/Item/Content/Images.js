import React from 'react'
import { Item } from 'stardust'

const { Group, Image } = Item

const Images = () => (
  <Group divided>
    <Item>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
    </Item>

    <Item>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
    </Item>

    <Item image='http://semantic-ui.com/images/wireframe/image.png' />
  </Group>
)

export default Images
