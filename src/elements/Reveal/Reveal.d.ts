import * as React from 'react';
import { default as RevealContent } from './RevealContent';

interface RevealProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** An active reveal displays its hidden content. */
  active?: boolean;

  /** An animation name that will be applied to Reveal. */
  animated?: 'fade' | 'small fade'
    | 'move' | 'move right' | 'move up' | 'move down'
    | 'rotate' | 'rotate left';

  /** Additional classes. */
  className?: string;

  /** Primary content. */
  children?: React.ReactNode;

  /** A disabled reveal will not animate when hovered. */
  disabled?: boolean;

  /** An element can show its content without delay. */
  instant?: boolean;
}

interface RevealComponent extends React.StatelessComponent<RevealProps> {
  Content: typeof RevealContent;
}

declare const Reveal: RevealComponent;

export default Reveal;
