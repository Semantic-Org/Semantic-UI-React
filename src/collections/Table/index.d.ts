import * as React from 'react';
import {
  SemanticCOLORS,
  SemanticVERTICALALIGNMENTS,
  SemanticWIDTHS
} from '../..';

interface TableProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Attach table to other content */
  attached?: boolean | 'top' | 'bottom';

  /** A table can reduce its complexity to increase readability. */
  basic?: boolean | 'very';

  /** A table may be divided each row into separate cells. */
  celled?: boolean | 'internally';

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing?: boolean;

  /** A table can be given a color to distinguish it from other tables. */
  color?: SemanticCOLORS;

  /** A table can specify its column count to divide its content evenly. */
  columns?: SemanticWIDTHS;

  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact?: boolean | 'very';

  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition?: boolean;

  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content.
   */
  fixed?: boolean;

  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow?: any;

  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow?: any;

  /** A table's colors can be inverted. */
  inverted?: boolean;

  /** A table may sometimes need to be more padded for legibility. */
  padded?: boolean | 'very';

  /**
   * A function that takes (data, index) and returns shorthand for a TableRow
   * to be placed within Table.Body.
   */
  renderBodyRow?: (data: any, index: number) => any;

  /** A table can have its rows appear selectable. */
  selectable?: boolean;

  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine?: boolean;

  /** A table can also be small or large. */
  size?: 'small' | 'large';

  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable?: boolean;

  /** A table can specify how it stacks table content responsively. */
  stackable?: boolean;

  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped?: boolean;

  /** A table can be formatted to display complex structured data. */
  structured?: boolean;

  /** Data to be passed to the renderBodyRow function. */
  tableData?: Array<any>;

  /** A table can specify how it stacks table content responsively. */
  unstackable?: boolean;
}

interface TableComponent extends React.StatelessComponent<TableProps> {
  Body: typeof TableBody;
  Cell: typeof TableCell;
  Footer: typeof TableFooter;
  Header: typeof TableHeader;
  HeaderCell: typeof TableHeaderCell;
  Row: typeof TableRow;
}

export const Table: TableComponent;

interface TableBodyProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const TableBody: React.StatelessComponent<TableBodyProps>;

interface TableCellProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A cell can be active or selected by a user. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing?: boolean;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** A cell can be disabled. */
  disabled?: boolean;

  /** A cell may call attention to an error or a negative value. */
  error?: boolean;

  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon?: any;

  /** A cell may let a user know whether a value is bad. */
  negative?: boolean;

  /** A cell may let a user know whether a value is good. */
  positive?: boolean;

  /** A cell can be selectable. */
  selectable?: boolean;

  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine?: boolean;

  /** A table cell can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right';

  /** A table cell can adjust its text alignment. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;

  /** A cell may warn a user. */
  warning?: boolean;

  /** A table can specify the width of individual columns independently. */
  width?: SemanticWIDTHS;
}

export const TableCell: React.StatelessComponent<TableCellProps>;

interface TableFooterProps extends TableHeaderProps {
}

export const TableFooter: React.StatelessComponent<TableFooterProps>;

interface TableHeaderProps {
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

export const TableHeader: React.StatelessComponent<TableHeaderProps>;

interface TableHeaderCellProps extends TableCellProps {
  sorted?: 'ascending' | 'descending';
}

export const TableHeaderCell: React.StatelessComponent<TableHeaderCellProps>;

interface TableRowProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A row can be active or selected by a user. */
  active?: boolean;

  /** An element type to render as (string or function). */
  cellAs?: any;

  /** Shorthand array of props for TableCell. */
  cells?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A row can be disabled. */
  disabled?: boolean;

  /** A row may call attention to an error or a negative value. */
  error?: boolean;

  /** A row may let a user know whether a value is bad. */
  negative?: boolean;

  /** A row may let a user know whether a value is good. */
  positive?: boolean;

  /** A table row can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right';

  /** A table row can adjust its vertical alignment. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;

  /** A row may warn a user. */
  warning?: boolean;
}

export const TableRow: React.StatelessComponent<TableRowProps>;
