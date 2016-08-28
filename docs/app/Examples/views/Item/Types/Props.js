import React from 'react'
import { Item } from 'stardust'

const items = [
  {
    childKey: 0,
    image: 'http://semantic-ui.com/images/wireframe/image.png',
    header: 'Header',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 1,
    image: 'http://semantic-ui.com/images/wireframe/image.png',
    header: 'Header',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
]

const Props = () => (
  <Item.Group items={items} />
)

export default Props
