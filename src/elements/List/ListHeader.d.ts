import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface ListHeaderProps extends StrictListHeaderProps {
  [key: string]: any
}

export interface StrictListHeaderProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const ListHeader: ForwardRefComponent<ListHeaderProps, HTMLDivElement>

export default ListHeader
