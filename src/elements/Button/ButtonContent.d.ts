import * as React from 'react';
import { SemanticShorthandContent } from '../..';

export interface ButtonContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent;

  /** Initially hidden, visible on hover. */
  hidden?: boolean;

  /** Initially visible, hidden on hover. */
  visible?: boolean;
}

declare const ButtonContent: React.StatelessComponent<ButtonContentProps>;

export default ButtonContent;
