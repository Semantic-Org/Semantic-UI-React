import {SemanticSIZES} from '../..';
import * as React from 'react';

interface FeedProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand array of props for FeedEvent. */
  events?: Array<any>;

  /** A feed can have different sizes. */
  size?: SemanticSIZES;
}

interface FeedClass extends React.ComponentClass<FeedProps> {
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

export const Feed: FeedClass;

interface FeedContentProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

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

export const FeedContent: React.ComponentClass<FeedContentProps>;

interface FeedDateProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const FeedDate: React.ComponentClass<FeedDateProps>;

interface FeedEventProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
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

export const FeedEvent: React.ComponentClass<FeedEventProps>;

interface FeedExtraProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** An event can contain additional information like a set of images. */
  images?: any;

  /** An event can contain additional text information. */
  text?: boolean;
}

export const FeedExtra: React.ComponentClass<FeedExtraProps>;

interface FeedLabelProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** An event can contain icon label. */
  icon?: any;

  /** An event can contain image label. */
  image?: any;
}

export const FeedLabel: React.ComponentClass<FeedLabelProps>;

interface FeedLikeProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for icon. Mutually exclusive with children. */
  icon?: any;
}

export const FeedLike: React.ComponentClass<FeedLikeProps>;

interface FeedMetaProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for FeedLike. */
  like?: any;
}

export const FeedMeta: React.ComponentClass<FeedMetaProps>;

interface FeedSummaryProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for FeedDate. */
  date?: any;

  /** Shorthand for FeedUser. */
  user?: any;
}

export const FeedSummary: React.ComponentClass<FeedSummaryProps>;

interface FeedUserProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const FeedUser: React.ComponentClass<FeedUserProps>;
