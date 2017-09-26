import * as React from 'react';

export interface DatetimeDaysProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** An array of dates that should be marked disabled in the calendar. */
  disabledDates?: Array<Date>;

  /** First day of the week (Sunday = 0, Monday = 1). */
  firstDayOfWeek?: number;

  /**
   * Called when the user changes the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   * @param {object} data.value - The proposed new value.
   */
  onChange?: (event: React.SyntheticEvent<HTMLElement>, data: DatetimeDaysProps) => void;

  /** Dates until or at selectionEnd are marked as selected. */
  selectionEnd?: Date;

  /** Dates at or after selectionStart are marked as selected. */
  selectionStart?: Date;

  /** Current value as a Date object. */
  value: Date;
}

interface DatetimeDaysComponent extends React.ComponentClass<DatetimeDaysProps> {
}

declare const DatetimeDays: DatetimeDaysComponent;

export default DatetimeDays;
