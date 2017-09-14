import * as React from 'react';

export interface DatetimeYearsProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;
}

interface DatetimeYearsComponent extends React.ComponentClass<DatetimeYearsProps> {
}

declare const DatetimeYears: DatetimeYearsComponent;

export default DatetimeYears;
