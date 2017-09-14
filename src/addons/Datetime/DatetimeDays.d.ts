import * as React from 'react';

export interface DatetimeDaysProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;
}

interface DatetimeDaysComponent extends React.ComponentClass<DatetimeDaysProps> {
}

declare const DatetimeDays: DatetimeDaysComponent;

export default DatetimeDays;
