import * as React from 'react';

interface SidebarProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Animation style. */
  animation?: 'overlay' | 'push' | 'scale down' | 'uncover' | 'slide out' | 'slide along';

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Initial value of visible. */
  defaultVisible?: boolean;

  /** Direction the sidebar should appear on. */
  direction?: 'top' | 'right' | 'bottom' | 'left';

  /** Controls whether or not the sidebar is visible on the page. */
  visible?: boolean;

  /** Sidebar width */
  width?: 'very thin' | 'thin' | 'wide' | 'very wide';
}

interface SidebarComponent extends React.ComponentClass<SidebarProps> {
  Pushable: typeof SidebarPushable;
  Pusher: typeof SidebarPusher;
}

export const Sidebar: SidebarComponent;

interface SidebarPushableProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const SidebarPushable: React.StatelessComponent<SidebarPushableProps>;

interface SidebarPusherProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Controls whether or not the dim is displayed. */
  dimmed?: boolean;
}

export const SidebarPusher: React.StatelessComponent<SidebarPusherProps>;
