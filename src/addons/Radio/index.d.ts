import * as React from 'react';

interface RadioProps {
  [key: string]: any;

  /** Format to emphasize the current selection state. */
  slider?: boolean;

  /** Format to show an on or off choice. */
  toggle?: boolean;

  /** HTML input type, either checkbox or radio. */
  type?: 'checkbox' | 'radio';
}

export const Radio: React.StatelessComponent<RadioProps>;
