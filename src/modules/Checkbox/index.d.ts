import * as React from 'react';

export interface CheckboxProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Whether or not checkbox is checked. */
  checked?: boolean;

  /** Additional classes. */
  className?: string;

  /** The initial value of checked. */
  defaultChecked?: boolean;

  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate?: boolean;

  /** A checkbox can appear disabled and be unable to change states */
  disabled?: boolean;

  /** Removes padding for a label. Auto applied when there is no label. */
  fitted?: boolean;

  /** Whether or not checkbox is indeterminate. */
  indeterminate?: boolean;

  /** The text of the associated label element. */
  label?: string;

  /** The HTML input name. */
  name?: string;

  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange?: (e: React.FormEvent<HTMLInputElement>, data: this) => void;

  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick?: (e: React.MouseEvent<HTMLInputElement>, data: this) => void;

  /** Format as a radio element. This means it is an exclusive option.*/
  radio?: any;

  /** A checkbox can be read-only and unable to change states */
  readOnly?: boolean;

  /** Format to emphasize the current selection state */
  slider?: any;

  /** Format to show an on or off choice */
  toggle?: any;

  /** HTML input type, either checkbox or radio. */
  type?: 'checkbox' | 'radio';

  /** The HTML input value. */
  value?: string;
}

export class Checkbox extends React.Component<CheckboxProps, {}> {
}
