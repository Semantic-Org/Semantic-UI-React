import * as React from 'react';

export interface DatetimeProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;
}

interface DatetimeComponent extends React.ComponentClass<DatetimeProps> {
}

declare const Datetime: DatetimeComponent;

export default Datetime;
