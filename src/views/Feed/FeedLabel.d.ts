import * as React from 'react';

export interface FeedLabelProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** An event can contain icon label. */
  icon?: any;

  /** An event can contain image label. */
  image?: any;
}

declare const FeedLabel: React.StatelessComponent<FeedLabelProps>;

export default FeedLabel;
