import * as React from 'react';

export interface RevealContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A reveal may contain content that is visible before interaction. */
  hidden?: boolean;

  /** A reveal may contain content that is hidden before user interaction. */
  visible?: boolean;
}

declare const RevealContent: React.StatelessComponent<RevealContentProps>;

export default RevealContent;
