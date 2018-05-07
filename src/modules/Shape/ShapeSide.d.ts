import * as React from 'react';

export interface ShapeSideProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** The item currently selected by keyboard shortcut. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A side can be a header. */
  header?: boolean;
}

declare const ShapeSide: React.StatelessComponent<ShapeSideProps>;

export default ShapeSide;
