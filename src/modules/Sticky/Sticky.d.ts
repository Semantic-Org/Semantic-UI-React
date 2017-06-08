import * as React from 'react';

export interface StickyProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const Sticky: React.ComponentClass<StickyProps>;

export default Sticky;
