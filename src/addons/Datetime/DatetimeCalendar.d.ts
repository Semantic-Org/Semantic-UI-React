import * as React from 'react';

export interface DatetimeCalendarProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /**
   * Formats the date string in the input and calendar.
   * A function that receives a date argument and returns a formatted date
   * @param {date} - A date object.
   */
  dateFormatter?: (value: Date) => string;

  /** An array of dates that should be marked disabled in the calendar. */
  disabledDates?: Array<Date>;

  /** First day of the week (Sunday = 0, Monday = 1). */
  firstDayOfWeek?: number;

  /**
   * Formats an hour for display in the hour selection.
   * A function that receives a date argument and returns a formatted
   * rounded hour.
   */
  hourFormatter?: (value: Date) => string;

  /** Current calendar mode. */
  mode: Array<string>;

  /**
   * Called when the user changes the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   * @param {object} data.value - The proposed new value.
   */
  onDateChange?: (event: React.SyntheticEvent<HTMLElement>, data: DatetimeCalendarProps) => void;

  /** Display future or past months or years. */
  page?: string|number;

  /** Dates until or at selectionEnd are marked as selected. */
  selectionEnd?: Date;

  /** Dates at or after selectionStart are marked as selected. */
  selectionStart?: Date;

  /** Enables time selection. */
  time?: boolean;

  /**
   * Formats the time string in the input and calendar.
   * The function receives a date arguments and should return a string
   * formatted time.
   * @param {date} - A date object.
   */
  timeFormatter?: (value: Date) => string;

  /** Current value as a Date object or a string that can be parsed into one. */
  value: Date;
}

interface DatetimeCalendarComponent extends React.ComponentClass<DatetimeCalendarProps> {
}

declare const DatetimeCalendar: DatetimeCalendarComponent;

export default DatetimeCalendar;
