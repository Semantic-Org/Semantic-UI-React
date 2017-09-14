import * as React from 'react';

export interface DatetimeYearsProps {
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
  onChange?: (event: React.SyntheticEvent<HTMLElement>, data: DatetimeYearsProps) => void;

  /** Current value as a Date object. */
  value?: object,
}

interface DatetimeYearsComponent extends React.ComponentClass<DatetimeYearsProps> {
}

declare const DatetimeYears: DatetimeYearsComponent;

export default DatetimeYears;
