import { StrictTableCellProps } from './TableCell'
import { ForwardRefComponent } from '../../generic'

export interface TableHeaderCellProps extends StrictTableHeaderCellProps {
  [key: string]: any
}

export interface StrictTableHeaderCellProps extends StrictTableCellProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Additional classes. */
  className?: string

  /** A header cell can be sorted in ascending or descending order. */
  sorted?: 'ascending' | 'descending'
}

declare const TableHeaderCell: ForwardRefComponent<TableHeaderCellProps, HTMLTableCellElement>

export default TableHeaderCell
