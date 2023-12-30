import React from 'react'
import {
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemDescription,
  ItemContent,
  Item,
} from 'semantic-ui-react'

const description = [
  'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
  'tiny stature, and even others for their massive size.',
].join(' ')

const ItemExampleDescriptions = () => (
  <ItemGroup>
    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader as='a'>Cute Dog</ItemHeader>
        <ItemDescription>
          <p>{description}</p>
          <p>
            Many people also have their own barometers for what makes a cute
            dog.
          </p>
        </ItemDescription>
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />

      <ItemContent>
        <ItemHeader as='a'>Cute Dog</ItemHeader>
        <ItemDescription content={description} />
      </ItemContent>
    </Item>

    <Item>
      <ItemImage size='small' src='/images/wireframe/image.png' />
      <ItemContent header='Cute Dog' description={description} />
    </Item>
  </ItemGroup>
)

export default ItemExampleDescriptions
