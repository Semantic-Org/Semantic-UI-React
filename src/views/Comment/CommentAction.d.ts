import * as React from 'react'
import { SemanticShorthandContent } from '../..'

export interface CommentActionProps {
  [key: string]: any

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

declare const CommentAction: React.ComponentClass<CommentActionProps>

export default CommentAction
