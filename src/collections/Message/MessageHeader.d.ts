import * as React from 'react'
import { SemanticShorthandContent } from '../..'

export interface MessageHeaderProps {
  [key: string]: any

  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const MessageHeader: React.StatelessComponent<MessageHeaderProps>

export default MessageHeader
