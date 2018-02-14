import * as React from 'react';
import { SemanticShorthandContent } from '../..';

export interface CardMetaProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent;

  /** A card meta can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right';
}

declare const CardMeta: React.StatelessComponent<CardMetaProps>;

export default CardMeta;
