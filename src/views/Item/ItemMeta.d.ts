import * as React from 'react';

interface ItemMetaProps {
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

declare const ItemMeta: React.StatelessComponent<ItemMetaProps>;

export default ItemMeta;
