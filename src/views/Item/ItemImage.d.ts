import { ImageProps, StrictImageProps } from '../../elements/Image'
import { ForwardRefComponent, SemanticSIZES } from '../../generic'

export interface ItemImageProps extends ImageProps {
  [key: string]: any

  /** An image may appear at different sizes. */
  size?: SemanticSIZES
}

export interface StrictItemImageProps extends StrictImageProps {
  /** An image may appear at different sizes. */
  size?: SemanticSIZES
}

declare const ItemImage: ForwardRefComponent<ItemImageProps, HTMLImageElement>

export default ItemImage
