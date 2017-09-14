import * as React from 'react';

export interface DatetimeHoursProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;
}

interface DatetimeHoursComponent extends React.ComponentClass<DatetimeHoursProps> {
}

declare const DatetimeHours: DatetimeHoursComponent;

export default DatetimeHours;
