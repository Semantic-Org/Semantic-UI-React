import * as React from 'react';
import { SemanticShorthandContent, SemanticTEXTALIGNMENTS } from '../..';

export interface ContainerProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent;

  /** Container has no maximum width. */
  fluid?: boolean;

  /** Reduce maximum width to more naturally accommodate text. */
  text?: boolean;

  /** Describes how the text inside this component should be aligned. */
  textAlign?: SemanticTEXTALIGNMENTS;
}

declare const Container: React.StatelessComponent<ContainerProps>;

export default Container;
