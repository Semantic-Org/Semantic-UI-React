import * as React from 'react';
import { TableCellProps } from './TableCell';

export interface TableHeaderCellProps extends TableCellProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** A header cell can be sorted in ascending or descending order. */
  sorted?: 'ascending' | 'descending';
}

declare const TableHeaderCell: React.StatelessComponent<TableHeaderCellProps>;

export default TableHeaderCell;
