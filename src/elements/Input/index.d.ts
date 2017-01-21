import * as React from 'react';
import {SemanticSIZES} from '../..';

export interface InputProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** An Input can be formatted to alert the user to an action they may perform. */
  action?: any | boolean;

  /** An action can appear along side an Input on the left or right. */
  actionPosition?: 'left';

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** An Input field can show that it is disabled. */
  disabled?: boolean;

  /** An Input field can show the data contains errors. */
  error?: boolean;

  /** Take on the size of it's container. */
  fluid?: boolean;

  /** An Input field can show a user is currently interacting with it. */
  focus?: boolean;

  /** Optional Icon to display inside the Input. */
  icon?: any | boolean;

  /** An Icon can appear inside an Input on the left. */
  iconPosition?: 'left';

  /** Shorthand for creating the HTML Input. */
  input?: any;

  /** Format to appear on dark backgrounds. */
  inverted?: boolean;

  /** Optional Label to display along side the Input. */
  label?: any;

  /** A Label can appear outside an Input on the left or right. */
  labelPosition?: 'left' | 'right' | 'left corner' | 'right corner';

  /** An Icon Input field can show that it is currently loading data. */
  loading?: boolean;

  /**
   * Called on change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange?: (event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) => void;

  /** An Input can vary in size. */
  size?: SemanticSIZES;

  /** An Input can receive focus. */
  tabIndex?: number | string;

  /** Transparent Input has no background. */
  transparent?: boolean;

  /** The HTML input type. */
  type?: string;
}

interface InputOnChangeData extends InputProps {
  value: string;
}

export const Input: React.StatelessComponent<InputProps>;
