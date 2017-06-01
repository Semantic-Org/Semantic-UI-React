import * as React from 'react';

export interface FeedSummaryProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** Shorthand for FeedDate. */
  date?: any;

  /** Shorthand for FeedUser. */
  user?: any;
}

declare const FeedSummary: React.StatelessComponent<FeedSummaryProps>;

export default FeedSummary;
