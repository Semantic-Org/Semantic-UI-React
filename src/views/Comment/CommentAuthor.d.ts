import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface CommentAuthorProps extends StrictCommentAuthorProps {
  [key: string]: any
}

export interface StrictCommentAuthorProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const CommentAuthor: ForwardRefComponent<CommentAuthorProps, HTMLDivElement>

export default CommentAuthor
