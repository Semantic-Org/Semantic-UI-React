import * as React from 'react';

export interface CardContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for CardDescription. */
  description?: string;

  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra?: boolean;

  /** Shorthand for CardHeader. */
  header?: any;

  /** Shorthand for CardMeta. */
  meta?: any;
}

declare const CardContent: React.StatelessComponent<CardContentProps>;

export default CardContent;
