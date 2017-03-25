import * as React from 'react';

export interface MenuMenuProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A sub menu can take right position. */
  position?: 'right';
}

declare const MenuMenu: React.StatelessComponent<MenuMenuProps>;

export default MenuMenu;
