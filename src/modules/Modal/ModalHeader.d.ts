import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface ModalHeaderProps extends StrictModalHeaderProps {
  [key: string]: any
}

export interface StrictModalHeaderProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const ModalHeader: ForwardRefComponent<ModalHeaderProps, HTMLDivElement>

export default ModalHeader
