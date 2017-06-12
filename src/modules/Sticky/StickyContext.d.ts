import * as React from 'react';

export interface StickyContextProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const StickyContext: React.ComponentClass<StickyContextProps>;

export default StickyContext;
