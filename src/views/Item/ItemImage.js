import React, { PropTypes } from 'react'
import { META } from '../../lib'
import Image from '../../elements/Image/Image'

function ItemImage(props) {
  return <Image {...props} />
}

ItemImage._meta = {
  name: 'ItemImage',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

export default ItemImage
