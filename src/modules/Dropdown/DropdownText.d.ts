import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface DropdownTextProps extends StrictDropdownTextProps {
  [key: string]: any
}

export interface StrictDropdownTextProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const DropdownText: ForwardRefComponent<DropdownTextProps, HTMLDivElement>

export default DropdownText
