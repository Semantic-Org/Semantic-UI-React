import * as React from 'react';

export interface DropdownMessageProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** Message to display when rendering the noResultsMessage type. */
  noResultsMessage?: string;

  /** The message type. */
  type: 'noResultsMessage' | 'maxSelections';

  /** The maxSelections value. */
  value?: number | string;
}

declare const DropdownMessage: React.StatelessComponent<DropdownMessageProps>;

export default DropdownMessage;
