import * as React from 'react';

export interface DropdownMenuProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A dropdown menu can scroll. */
  scrolling?: boolean;
}

declare const DropdownMenu: React.StatelessComponent<DropdownMenuProps>;

export default DropdownMenu;
