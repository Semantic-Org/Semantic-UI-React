import * as React from 'react';

export interface DatetimeMinutesProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;
}

interface DatetimeMinutesComponent extends React.ComponentClass<DatetimeMinutesProps> {
}

declare const DatetimeMinutes: DatetimeMinutesComponent;

export default DatetimeMinutes;
