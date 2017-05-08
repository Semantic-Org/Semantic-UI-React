import * as React from 'react';

export interface FeedUserProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;
}

declare const FeedUser: React.StatelessComponent<FeedUserProps>;

export default FeedUser;
