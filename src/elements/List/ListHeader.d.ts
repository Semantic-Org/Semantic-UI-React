import * as React from 'react';

export interface ListHeaderProps {
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

declare const ListHeader: React.StatelessComponent<ListHeaderProps>;

export default ListHeader;
