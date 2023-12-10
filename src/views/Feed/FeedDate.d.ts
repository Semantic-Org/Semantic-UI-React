import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface FeedDateProps extends StrictFeedDateProps {
  [key: string]: any
}

export interface StrictFeedDateProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const FeedDate: ForwardRefComponent<FeedDateProps, HTMLDivElement>

export default FeedDate
