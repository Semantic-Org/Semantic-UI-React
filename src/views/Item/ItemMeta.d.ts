import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface ItemMetaProps extends StrictItemMetaProps {
  [key: string]: any
}

export interface StrictItemMetaProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const ItemMeta: ForwardRefComponent<ItemMetaProps, HTMLDivElement>

export default ItemMeta
