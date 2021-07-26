import * as React from 'react'

import { ImageProps, StrictImageProps } from '../../elements/Image'
import { SemanticSIZES } from '../../generic'

export interface ItemImageProps extends ImageProps {
  [key: string]: any

  /** An image may appear at different sizes. */
  size?: SemanticSIZES
}

export interface StrictItemImageProps extends StrictImageProps {
  /** An image may appear at different sizes. */
  size?: SemanticSIZES
}

declare const ItemImage: React.FC<ItemImageProps>

export default ItemImage
