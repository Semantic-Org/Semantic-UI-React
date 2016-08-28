import React from 'react'
import {
  getElementType,
  META,
} from '../../lib'
import Image from '../../elements/Image/Image'

/**
 * An item can contain an image
 * */
function ItemImage(props) {
  const ElementType = getElementType(ItemImage, props)

  return <Image {...props} as={ElementType} />
}

ItemImage._meta = {
  name: 'ItemImage',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

export default ItemImage
