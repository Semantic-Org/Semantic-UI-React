import * as React from 'react';
import { CheckboxProps } from '../../modules/Checkbox';

interface RadioProps extends CheckboxProps {
  [key: string]: any;

  /** Format to emphasize the current selection state. */
  slider?: boolean;

  /** Format to show an on or off choice. */
  toggle?: boolean;

  /** HTML input type, either checkbox or radio. */
  type?: 'checkbox' | 'radio';
}

export const Radio: React.StatelessComponent<RadioProps>;
