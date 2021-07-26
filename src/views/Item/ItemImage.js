import React from 'react'

import { createShorthandFactory, getUnhandledProps } from '../../lib'
import Image from '../../elements/Image'

/**
 * An item can contain an image.
 */
const ItemImage = React.forwardRef(function (props, ref) {
  const { size } = props
  const rest = getUnhandledProps(ItemImage, props)

  return <Image {...rest} size={size} ui={!!size} wrapped ref={ref} />
})

ItemImage.displayName = 'ItemImage'
ItemImage.propTypes = {
  /** An image may appear at different sizes. */
  size: Image.propTypes.size,
}

ItemImage.create = createShorthandFactory(ItemImage, (src) => ({ src }))

export default ItemImage
