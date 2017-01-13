import * as React from 'react';
import { ImageProps } from '../../elements/Image';
import { SemanticVERTICALALIGNMENTS } from '../..';

interface ItemProps {
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

interface ItemClass extends React.ComponentClass<ItemProps> {
  Content: typeof ItemContent;
  Description: typeof ItemDescription;
  Extra: typeof ItemExtra;
  Group: typeof ItemGroup;
  Header: typeof ItemHeader;
  Image: typeof ItemImage;
  Meta: typeof ItemMeta;
}

export const Item: ItemClass;

interface ItemContentProps {
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

  /** Content can specify its vertical alignment */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

export const ItemContent: React.ComponentClass<ItemContentProps>;

interface ItemDescriptionProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ItemDescription: React.ComponentClass<ItemDescriptionProps>;

interface ItemExtraProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ItemExtra: React.ComponentClass<ItemExtraProps>;

interface ItemGroupProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Items can be divided to better distinguish between grouped content. */
  divided?: boolean;

  /** Shorthand array of props for Item. */
  items?: any;

  /** An item can be formatted so that the entire contents link to another page. */
  link?: boolean;

  /** A group of items can relax its padding to provide more negative space. */
  relaxed?: boolean|'very';
}

export const ItemGroup: React.ComponentClass<ItemGroupProps>;

interface ItemHeaderProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ItemHeader: React.ComponentClass<ItemHeaderProps>;

interface ItemImageProps extends ImageProps {
}

export const ItemImage: React.ComponentClass<ItemImageProps>;

interface ItemMetaProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ItemMeta: React.ComponentClass<ItemMetaProps>;
