import * as React from 'react';

interface RevealContentProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** A reveal may contain content that is visible before interaction. */
  hidden?: boolean;

  /** A reveal may contain content that is hidden before user interaction. */
  visible?: boolean;
}

export const RevealContent: React.ComponentClass<RevealContentProps>;

interface RevealProps {
  /** An active reveal displays its hidden content. */
  active?: boolean;

  /** An animation name that will be applied to Reveal. */
  animated?: 'fade' | 'small fade' | 'move' | 'move right' | 'move up' | 'move down' | 'rotate' | 'rotate left';

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** A disabled reveal will not animate when hovered. */
  disabled?: boolean;

  /** An element can show its content without delay. */
  instant?: boolean;
}

interface RevealClass extends React.ComponentClass<RevealProps> {
  Content: typeof RevealContent;
}

export const Reveal: RevealClass;
