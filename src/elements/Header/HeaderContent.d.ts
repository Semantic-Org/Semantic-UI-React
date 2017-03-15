import * as React from 'react';

export interface HeaderContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const HeaderContent: React.StatelessComponent<HeaderContentProps>;

export default HeaderContent;
