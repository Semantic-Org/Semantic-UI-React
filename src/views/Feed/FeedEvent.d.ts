import * as React from 'react';

export interface FeedEventProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for FeedContent. */
  content?: any;

  /** Shorthand for FeedDate. */
  date?: any;

  /** Shorthand for FeedExtra with images. */
  extraImages?: any;

  /** Shorthand for FeedExtra with content. */
  extraText?: any;

  /** An event can contain icon label. */
  icon?: any;

  /** An event can contain image label. */
  image?: any;

  /** Shorthand for FeedMeta. */
  meta?: any;

  /** Shorthand for FeedSummary. */
  summary?: any;
}

declare const FeedEvent: React.StatelessComponent<FeedEventProps>;

export default FeedEvent;
