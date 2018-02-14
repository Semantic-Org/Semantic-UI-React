import * as React from 'react';

export interface DatetimeMenuProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Current calendar mode */
  mode: Array<string>;

  /**
   * Called when the mode is changed (i.e. switching from month view to year selection).
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed mode.
   * @param {object} data.mode - The proposed new mode.
   */
  onDateChangeMode?: (event: React.SyntheticEvent<HTMLElement>, data: DatetimeMenuProps) => void;

  /**
   * Called when changing to the next page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All Menu.Item props.
   */
  onNextPage?: (event: React.SyntheticEvent<HTMLElement>, data: DatetimeMenuProps) => void;


  /**
   * Called when changing to the previous page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All Menu.Item props.
   */
  onPreviousPage?: (event: React.SyntheticEvent<HTMLElement>, data: DatetimeMenuProps) => void;

  /** Current value as a Date object. */
  value: Date;
}

interface DatetimeMenuComponent extends React.ComponentClass<DatetimeMenuProps> {
}

declare const DatetimeMenu: DatetimeMenuComponent;

export default DatetimeMenu;
