import * as React from 'react';

export interface DatetimeMinutesProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** DatetimeMinutes interval between each item. */
  interval?: number;

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
  onChange?: (event: React.SyntheticEvent<HTMLElement>, data: DatetimeMinutesProps) => void;

  /** Current value as a Date object. */
  value: Date;
}

interface DatetimeMinutesComponent extends React.ComponentClass<DatetimeMinutesProps> {
}

declare const DatetimeMinutes: DatetimeMinutesComponent;

export default DatetimeMinutes;
