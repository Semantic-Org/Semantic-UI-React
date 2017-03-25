import * as React from 'react';

export interface SidebarPushableProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const SidebarPushable: React.StatelessComponent<SidebarPushableProps>;

export default SidebarPushable;
