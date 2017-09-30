import * as React from 'react';

import {
  SemanticShorthandItem
} from '../..';
import { IconProps } from "../../elements/Icon/Icon";

export interface DatetimeProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Enables date selection. */
  date?: boolean;

  /** Disables the input element. */
  disabled?: boolean;

  /** An array of dates that should be marked disabled in the calendar. */
  disabledDates?: Array<Date>;

  /** Initial value of open. */
  defaultOpen?: boolean;

  /** Initial value as a Date object or a string that can be parsed into one. */
  defaultValue?: Date;

  /**
   * Formats the date string in the input and calendar.
   * A function that receives a date argument and returns a formatted date
   * @param {date} - A date object.
   */
  dateFormatter?: (value: Date) => string;

  /** The initial mode value. */
  defaultMode?: string;

  /**
   * Formats an hour for display in the hour selection.
   * A function that receives a date argument and returns a formatted
   * rounded hour.
   */
  hourFormatter?: (value: Date) => string;

  /** A Datetime input can alert a user to a problem. */
  error?: boolean;

  /** First day of the week. Can be either 0 (Sunday), 1 (Monday) * */
  firstDayOfWeek?: number;

  /** Shorthand for Icon. */
  icon?: SemanticShorthandItem<IconProps>;

  /** Do not allow dates after maxDate. */
  maxDate?: Date;

  /** Do not allow dates before minDate. */
  minDate?: Date;

  /** The unit of time to operate on. */
  mode?: string;

  /** Name of the input field which holds the date value. */
  name?: string;

  /**
   * Called when the user changes the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange?: Function;

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose?: Function;

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen?: Function;

  /** Controls whether or not the dropdown menu is displayed. */
  open?: boolean;

  /** Placeholder text. */
  placeholder?: string;

  /** Render two calendars for selecting the start and end of a range. */
  range?: boolean;

  /** Enables time selection. */
  time?: boolean;

  /**
   * Formats the time string in the input and calendar.
   * The function receives a date arguments and should return a string formatted time.
   *
   * @param {date} - A date object.
   */
  timeFormatter?: (value: Date) => string;

  /** Current value as a Date object or a string that can be parsed into one. */
  value?: Date;
}

interface DatetimeComponent extends React.ComponentClass<DatetimeProps> {
}

declare const Datetime: DatetimeComponent;

export default Datetime;
