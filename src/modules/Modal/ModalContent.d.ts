import * as React from 'react';
import { SemanticShorthandContent } from '../..';

export interface ModalContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent;

  /** A modal can contain image content. */
  image?: boolean;

  /** A modal can use the entire size of the screen. */
  scrolling?: boolean;
}

declare const ModalContent: React.StatelessComponent<ModalContentProps>;

export default ModalContent;
