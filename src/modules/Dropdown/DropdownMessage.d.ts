import * as React from 'react';

export interface DropdownMessageProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** Message to display when the maxSelections cap has been reached. */
  maxSelectionsMessage?: React.ReactNode;

  /** Message to display when rendering the noResultsMessage type. */
  noResultsMessage?: React.ReactNode;

  /** The message type. */
  type: 'noResultsMessage' | 'maxSelectionsMessage';

  /** The maxSelections value. */
  value?: number | string;
}

declare const DropdownMessage: React.ComponentClass<DropdownMessageProps>;

export default DropdownMessage;
