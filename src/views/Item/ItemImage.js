import React from 'react'
import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import Image from '../../elements/Image'

/**
 * An item can contain an image
 * */
function ItemImage(props) {
  const ElementType = getElementType(ItemImage, props)
  const rest = getUnhandledProps(ItemImage, props)

  return <Image {...rest} as={ElementType} ui={false} />
}

ItemImage._meta = {
  name: 'ItemImage',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

export default ItemImage
