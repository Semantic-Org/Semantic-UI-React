import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface FeedUserProps extends StrictFeedUserProps {
  [key: string]: any
}

export interface StrictFeedUserProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const FeedUser: ForwardRefComponent<FeedUserProps, HTMLAnchorElement>

export default FeedUser
