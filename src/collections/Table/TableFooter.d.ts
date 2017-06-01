import * as React from 'react';
import { TableHeaderProps } from './TableHeader';

export interface TableFooterProps extends TableHeaderProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;
}

declare const TableFooter: React.StatelessComponent<TableFooterProps>;

export default TableFooter;
