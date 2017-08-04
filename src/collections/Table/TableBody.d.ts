import * as React from 'react';

export interface TableBodyProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const TableBody: React.StatelessComponent<TableBodyProps>;

export default TableBody;
