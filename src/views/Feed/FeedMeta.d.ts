import * as React from 'react';

import { SemanticShorthandContent, SemanticShorthandItem } from '../..';
import { FeedLikeProps } from './FeedLike';

export interface FeedMetaProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent;

  /** Shorthand for FeedLike. */
  like?: SemanticShorthandItem<FeedLikeProps>;
}

declare const FeedMeta: React.StatelessComponent<FeedMetaProps>;

export default FeedMeta;
