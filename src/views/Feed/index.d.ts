import * as React from 'react';

interface FeedProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand array of props for FeedEvent. */
  events?: Array<any>;

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

export const Feed: FeedComponent;

interface FeedContentProps {
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

export const FeedContent: React.StatelessComponent<FeedContentProps>;

interface FeedDateProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const FeedDate: React.StatelessComponent<FeedDateProps>;

interface FeedEventProps {
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

export const FeedEvent: React.StatelessComponent<FeedEventProps>;

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

export const FeedExtra: React.StatelessComponent<FeedExtraProps>;

interface FeedLabelProps {
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

export const FeedLabel: React.StatelessComponent<FeedLabelProps>;

interface FeedLikeProps {
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

export const FeedLike: React.StatelessComponent<FeedLikeProps>;

interface FeedMetaProps {
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

export const FeedMeta: React.StatelessComponent<FeedMetaProps>;

interface FeedSummaryProps {
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

export const FeedSummary: React.StatelessComponent<FeedSummaryProps>;

interface FeedUserProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;
}

export const FeedUser: React.StatelessComponent<FeedUserProps>;
