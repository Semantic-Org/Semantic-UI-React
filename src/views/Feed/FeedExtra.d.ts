import * as React from 'react';

interface FeedExtraProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** An event can contain additional information like a set of images. */
  images?: boolean | Array<any>;

  /** An event can contain additional text information. */
  text?: boolean;
}

declare const FeedExtra: React.StatelessComponent<FeedExtraProps>;

export default FeedExtra;
