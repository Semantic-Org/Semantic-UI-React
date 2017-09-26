import * as React from 'react';

export interface DatetimeGridProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  // TODO add doc block
  headers?: Array<string>,

  // TODO add doc block
  columns?: number,

  // TODO add doc block
  cells: Array<object>,
}

interface DatetimeGridComponent extends React.StatelessComponent<DatetimeGridProps> {
}

declare const DatetimeGrid: DatetimeGridComponent;

export default DatetimeGrid;
