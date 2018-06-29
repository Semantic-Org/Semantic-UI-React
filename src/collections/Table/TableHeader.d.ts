import * as React from 'react'
import { SemanticShorthandContent } from '../..'

export interface TableHeaderProps {
  [key: string]: any

  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth?: boolean
}

declare const TableHeader: React.StatelessComponent<TableHeaderProps>

export default TableHeader
