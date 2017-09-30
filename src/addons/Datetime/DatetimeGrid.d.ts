import * as React from 'react';

export interface DatetimeGridProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Table header cells. */
  headers?: Array<string>;

  /** The number of columns wide the table should be. Cells are wrapped to fit. */
  columns: number;

  /** Shorthand table cells, wrapped to the number of columns. */
  cells: Array<object>;
}

interface DatetimeGridComponent extends React.StatelessComponent<DatetimeGridProps> {
}

declare const DatetimeGrid: DatetimeGridComponent;

export default DatetimeGrid;
