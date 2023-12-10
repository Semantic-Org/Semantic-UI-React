import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface ListListProps extends StrictListListProps {
  [key: string]: any
}

export interface StrictListListProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const ListList: ForwardRefComponent<ListListProps, HTMLDivElement>

export default ListList
