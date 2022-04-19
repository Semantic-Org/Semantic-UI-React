import * as React from 'react'

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

declare const TableBody: React.FC<TableBodyProps>

export default TableBody
