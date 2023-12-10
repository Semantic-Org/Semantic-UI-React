import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface MessageItemProps extends StrictMessageItemProps {
  [key: string]: any
}

export interface StrictMessageItemProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const MessageItem: ForwardRefComponent<MessageItemProps, HTMLLIElement>

export default MessageItem
