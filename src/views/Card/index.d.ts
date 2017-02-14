import * as React from 'react';
import { SemanticCOLORS, SemanticWIDTHS } from '../..';

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

export const Card: CardComponent;

interface CardContentProps {
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

export const CardContent: React.StatelessComponent<CardContentProps>;

interface CardDescriptionProps {
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

export const CardDescription: React.StatelessComponent<CardDescriptionProps>;

interface CardGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A group of cards can double its column width for mobile. */
  doubling?: boolean;

  /** Shorthand array of props for Card. */
  items?: Array<any>;

  /** A group of cards can set how many cards should exist in a row. */
  itemsPerRow?: SemanticWIDTHS;

  /** A group of cards can automatically stack rows to a single columns on mobile devices. */
  stackable?: boolean;
}

export const CardGroup: React.StatelessComponent<CardGroupProps>;

interface CardHeaderProps {
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

export const CardHeader: React.StatelessComponent<CardHeaderProps>;

interface CardMetaProps {
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

export const CardMeta: React.StatelessComponent<CardMetaProps>;
