import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface PlaceholderParagraphProps extends StrictPlaceholderParagraphProps {
  [key: string]: any
}

export interface StrictPlaceholderParagraphProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const PlaceholderParagraph: ForwardRefComponent<PlaceholderParagraphProps, HTMLDivElement>

export default PlaceholderParagraph
