import React from 'react'
import {
  META,
} from '../../lib'
import Image from '../../elements/Image'

/**
 * An item can contain an image
 **/
function ItemImage(props) {
  return <Image {...props} ui={false} wrapped />
}

ItemImage._meta = {
  name: 'ItemImage',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

export default ItemImage
