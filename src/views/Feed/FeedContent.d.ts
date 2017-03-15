import * as React from 'react';

export interface FeedContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** An event can contain a date. */
  date?: any;

  /** Shorthand for FeedExtra with images. */
  extraImages?: any;

  /** Shorthand for FeedExtra with text. */
  extraText?: any;

  /** Shorthand for FeedMeta. */
  meta?: any;

  /** Shorthand for FeedSummary. */
  summary?: any;
}

declare const FeedContent: React.StatelessComponent<FeedContentProps>;

export default FeedContent;
