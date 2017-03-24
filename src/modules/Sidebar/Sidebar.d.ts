import * as React from 'react';

import { default as SidebarPushable } from './SidebarPushable';
import { default as SidebarPusher } from './SidebarPusher';

export interface SidebarProps {
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

declare const Sidebar: SidebarComponent;

export default Sidebar;
