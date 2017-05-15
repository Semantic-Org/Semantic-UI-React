import * as React from 'react';

export interface FeedLikeProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** Shorthand for icon. Mutually exclusive with children. */
  icon?: any;
}

declare const FeedLike: React.StatelessComponent<FeedLikeProps>;

export default FeedLike;
