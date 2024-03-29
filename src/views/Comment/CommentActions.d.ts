import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface CommentActionsProps extends StrictCommentActionsProps {
  [key: string]: any
}

export interface StrictCommentActionsProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const CommentActions: ForwardRefComponent<CommentActionsProps, HTMLDivElement>

export default CommentActions
