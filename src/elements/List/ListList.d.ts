import * as React from 'react';

export interface ListListProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const ListList: React.StatelessComponent<ListListProps>;

export default ListList;
