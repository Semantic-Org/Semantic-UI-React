import * as React from 'react';

export interface DropdownSearchInputProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** A ref handler for input. */
  inputRef?: (c: HTMLInputElement) => void;

  /** A name of the input. */
  name?: string;

  /** Custom styles. */
  style?: Object,

  /** An input can receive focus. */
  tabIndex?: number | string;

  /** The HTML input type. */
  type?: string;

  /** Stored value. */
  value?: number | string;

  /** A width of an input. */
  width?: number | string;
}

declare const DropdownSearchInput: React.ComponentClass<DropdownSearchInputProps>;

export default DropdownSearchInput;
