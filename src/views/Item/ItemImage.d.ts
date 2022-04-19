import * as React from 'react'
import { ImageProps, StrictImageProps } from '../../elements/Image'

export interface ItemImageProps extends ImageProps {}

export interface StrictItemImageProps extends StrictImageProps {}

declare const ItemImage: React.FC<ItemImageProps>

export default ItemImage
