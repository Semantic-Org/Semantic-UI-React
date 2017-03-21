import * as React from 'react';

export interface TableHeaderProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth?: boolean;
}

declare const TableHeader: React.StatelessComponent<TableHeaderProps>;

export default TableHeader;
