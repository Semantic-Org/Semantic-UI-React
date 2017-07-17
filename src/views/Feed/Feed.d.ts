import * as React from 'react';

import { SemanticShorthandCollection } from '../..';
import { default as FeedContent } from './FeedContent';
import { default as FeedDate } from './FeedDate';
import { default as FeedEvent, FeedEventProps } from './FeedEvent';
import { default as FeedExtra } from './FeedExtra';
import { default as FeedLabel } from './FeedLabel';
import { default as FeedMeta } from './FeedMeta';
import { default as FeedLike } from './FeedLike';
import { default as FeedSummary } from './FeedSummary';
import { default as FeedUser } from './FeedUser';

export interface FeedProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand array of props for FeedEvent. */
  events?: SemanticShorthandCollection<FeedEventProps>;

  /** A feed can have different sizes. */
  size?: 'small' | 'large';
}

interface FeedComponent extends React.StatelessComponent<FeedProps> {
  Content: typeof FeedContent;
  Date: typeof FeedDate;
  Event: typeof FeedEvent;
  Extra: typeof FeedExtra;
  Label: typeof FeedLabel;
  Meta: typeof FeedMeta;
  Like: typeof FeedLike;
  Summary: typeof FeedSummary;
  User: typeof FeedUser;
}

declare const Feed: FeedComponent;

export default Feed;
