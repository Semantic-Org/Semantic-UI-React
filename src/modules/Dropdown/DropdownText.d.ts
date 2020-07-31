import * as React from 'react'
import { SemanticShorthandContent } from '../../generic'

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

declare const DropdownText: React.FunctionComponent<DropdownTextProps>

export default DropdownText
