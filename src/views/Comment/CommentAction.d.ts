import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface CommentActionProps extends StrictCommentActionProps {
  [key: string]: any
}

export interface StrictCommentActionProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Style as the currently active action. */
  active?: boolean

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const CommentAction: ForwardRefComponent<CommentActionProps, HTMLDivElement>

export default CommentAction
