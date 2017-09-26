import * as React from 'react';

export interface DatetimeMonthsProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /**
   * Called when the user changes the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   * @param {object} data.value - The proposed new value.
   */
  onChange?: (event: React.SyntheticEvent<HTMLElement>, data: DatetimeMonthsProps) => void;

  /** Current value as a Date object. */
  value: Date;
}

interface DatetimeMonthsComponent extends React.ComponentClass<DatetimeMonthsProps> {
}

declare const DatetimeMonths: DatetimeMonthsComponent;

export default DatetimeMonths;
