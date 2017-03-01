import * as React from 'react';

import { SemanticCOLORS } from '../..';
import { default as CardContent } from './CardContent';
import { default as CardDescription } from './CardDescription';
import { default as CardGroup } from './CardGroup';
import { default as CardHeader } from './CardHeader';
import { default as CardMeta } from './CardMeta';

interface CardProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A Card can center itself inside its container. */
  centered?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A Card can be formatted to display different colors. */
  color?: SemanticCOLORS;

  /** Shorthand for CardDescription. */
  description?: any;

  /** Shorthand for primary content of CardContent. */
  extra?: any;

  /** A Card can be formatted to take up the width of its container. */
  fluid?: boolean;

  /** Shorthand for CardHeader. */
  header?: any;

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href?: string;

  /** A card can contain an Image component. */
  image?: any;

  /** A card can be formatted to link to other content. */
  link?: boolean;

  /** Shorthand for CardMeta. */
  meta?: any;

  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: CardProps) => void;

  /** A Card can be formatted to raise above the page. */
  raised?: boolean;
}

interface CardComponent extends React.ComponentClass<CardProps> {
  Content: typeof CardContent;
  Description: typeof CardDescription;
  Group: typeof CardGroup;
  Header: typeof CardHeader;
  Meta: typeof CardMeta;
}

declare const Card: CardComponent;

export default Card;
