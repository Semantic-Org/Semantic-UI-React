import React from 'react'
import { ItemGroup } from 'semantic-ui-react'

const items = [
  {
    childKey: 0,
    image: '/images/wireframe/image.png',
    header: 'Header',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 1,
    image: '/images/wireframe/image.png',
    header: 'Header',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
]

const ItemExampleProps = () => <ItemGroup items={items} />

export default ItemExampleProps
