import * as React from 'react';
import { SemanticVERTICALALIGNMENTS } from '../..';

export interface ItemContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for ItemDescription component. */
  description?: string;

  /** Shorthand for ItemExtra component. */
  extra?: any;

  /** Shorthand for ItemHeader component. */
  header?: any;

  /** Shorthand for ItemMeta component. */
  meta?: any;

  /** Content can specify its vertical alignment. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

declare const ItemContent: React.ComponentClass<ItemContentProps>;

export default ItemContent;
