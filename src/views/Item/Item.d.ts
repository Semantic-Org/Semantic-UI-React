import * as React from 'react';

import ItemContent from './ItemContent';
import ItemDescription from './ItemDescription';
import ItemExtra from './ItemExtra';
import ItemGroup from './ItemGroup';
import ItemHeader from './ItemHeader';
import ItemImage from './ItemImage';
import ItemMeta from './ItemMeta';

interface ItemProps {
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

const Item: ItemComponent;

export default Item;
