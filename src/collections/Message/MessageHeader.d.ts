import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface MessageHeaderProps extends StrictMessageHeaderProps {
  [key: string]: any
}

export interface StrictMessageHeaderProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const MessageHeader: ForwardRefComponent<MessageHeaderProps, HTMLDivElement>

export default MessageHeader
