import * as React from 'react';

export interface DatetimeMonthsProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;
}

interface DatetimeMonthsComponent extends React.ComponentClass<DatetimeMonthsProps> {
}

declare const DatetimeMonths: DatetimeMonthsComponent;

export default DatetimeMonths;
