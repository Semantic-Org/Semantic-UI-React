import * as React from 'react';

interface DropdownDividerProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;
}

declare const DropdownDivider: React.ComponentClass<DropdownDividerProps>;

export default DropdownDivider;
