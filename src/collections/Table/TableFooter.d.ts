import * as React from 'react';
import { TableHeaderProps } from './TableHeader';

export interface TableFooterProps extends TableHeaderProps {
  [key: string]: any;
}

declare const TableFooter: React.StatelessComponent<TableFooterProps>;

export default TableFooter;
