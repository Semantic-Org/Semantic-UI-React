import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface ItemHeaderProps extends StrictItemHeaderProps {
  [key: string]: any
}

export interface StrictItemHeaderProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const ItemHeader: ForwardRefComponent<ItemHeaderProps, HTMLDivElement>

export default ItemHeader
