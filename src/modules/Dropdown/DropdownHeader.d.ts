import * as React from 'react';

export interface DropdownHeaderProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** Shorthand for Icon. */
  icon?: any;
}

declare const DropdownHeader: React.ComponentClass<DropdownHeaderProps>;

export default DropdownHeader;
