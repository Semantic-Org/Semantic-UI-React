import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface CommentMetadataProps extends StrictCommentMetadataProps {
  [key: string]: any
}

export interface StrictCommentMetadataProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const CommentMetadata: ForwardRefComponent<CommentMetadataProps, HTMLDivElement>

export default CommentMetadata
