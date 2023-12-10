import * as React from 'react'
import { ForwardRefComponent } from '../../generic'

export interface TableBodyProps extends StrictTableBodyProps {
  [key: string]: any
}

export interface StrictTableBodyProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string
}

declare const TableBody: ForwardRefComponent<TableBodyProps, HTMLTableSectionElement>

export default TableBody
