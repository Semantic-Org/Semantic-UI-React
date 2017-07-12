import * as React from 'react';
import { default as TabPane } from './TabPane';

export interface TabProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** The initial activeIndex. */
  defaultActiveIndex?: number | string;

  /** Index of the currently active tab. */
  activeIndex?: number | string;

  /** Shorthand props for the Menu. */
  menu?: any;

  /**
   * Called on tab change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - The proposed new Tab.Pane.
   * @param {object} data.activeIndex - The new proposed activeIndex.
   * @param {object} data.panes - Props of the new proposed active pane.
   */
  onTabChange?: (event: React.MouseEvent<HTMLDivElement>, data: TabProps) => void;

  /** Shorthand props for the Menu. */
  panes?: Array<{
    menuItem: any;
    render: () => React.ReactNode;
  }>;
}

interface TabComponent extends React.ComponentClass<TabProps> {
  Pane: typeof TabPane;
}

declare const Tab: TabComponent;

export default Tab;
