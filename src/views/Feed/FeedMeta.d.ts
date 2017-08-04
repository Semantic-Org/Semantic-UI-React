import * as React from 'react';

export interface FeedMetaProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** Shorthand for FeedLike. */
  like?: any;
}

declare const FeedMeta: React.StatelessComponent<FeedMetaProps>;

export default FeedMeta;
