import * as React from 'react';

import { default as StickyContext } from './StickyContext';

export interface StickyProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Offset in pixels from the top of the screen when fixing element to viewport. */
  offset?: number;

  /** Offset in pixels from the bottom of the screen when fixing element to viewport. */
  bottomOffset?: number;

  /**
   * Whether element should be "pushed" by the viewport,
   * attaching to the bottom of the screen when scrolling up
   */
  pushing?: boolean;

  /* Callback when element is fixed to page. */
  onStick?: (event: React.MouseEvent<HTMLElement>) => void;

  /* Callback when element is unfixed from page. */
  onUnstick?: (event: React.MouseEvent<HTMLElement>) => void;

  /* Callback when element is bound to top of parent container. */
  onTop?: (event: React.MouseEvent<HTMLElement>) => void;

  /* Callback when element is bound to bottom of parent container. */
  onBottom?: (event: React.MouseEvent<HTMLElement>) => void;

}

interface StickyComponent extends React.ComponentClass<StickyProps> {
  Context: typeof StickyContext;
}

declare const Sticky: StickyComponent;

export default Sticky;
