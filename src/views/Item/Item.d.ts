import * as React from 'react';

import { default as ItemContent } from './ItemContent';
import { default as ItemDescription } from './ItemDescription';
import { default as ItemExtra } from './ItemExtra';
import { default as ItemGroup } from './ItemGroup';
import { default as ItemHeader } from './ItemHeader';
import { default as ItemImage } from './ItemImage';
import { default as ItemMeta } from './ItemMeta';

export interface ItemProps {
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

  /** Shorthand for ItemImage component. */
  image?: any;

  /** Shorthand for ItemMeta component. */
  meta?: any;
}

interface ItemComponent extends React.StatelessComponent<ItemProps> {
  Content: typeof ItemContent;
  Description: typeof ItemDescription;
  Extra: typeof ItemExtra;
  Group: typeof ItemGroup;
  Header: typeof ItemHeader;
  Image: typeof ItemImage;
  Meta: typeof ItemMeta;
}

declare const Item: ItemComponent;

export default Item;
