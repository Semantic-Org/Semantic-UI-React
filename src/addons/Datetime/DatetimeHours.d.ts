import * as React from 'react';

export interface DatetimeHoursProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /**
   * Formats a Date object as a minute string.
   *
   * @param {date} - A date object.
   * @returns {string} - A formatted minute string.
   */
  formatter?: (value: Date) => string;

  /**
   * Called when the user changes the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   * @param {object} data.value - The proposed new value.
   */
  onDateChange?: (event: React.SyntheticEvent<HTMLElement>, data: DatetimeHoursProps) => void;

  /** Current value as a Date object. */
  value: Date;
}

interface DatetimeHoursComponent extends React.ComponentClass<DatetimeHoursProps> {
}

declare const DatetimeHours: DatetimeHoursComponent;

export default DatetimeHours;
