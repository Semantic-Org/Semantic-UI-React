import * as React from 'react';

export interface DimmerDimmableProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A dimmable element can blur its contents. */
  blurring?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Controls whether or not the dim is displayed. */
  dimmed?: boolean;
}

declare const DimmerDimmable: React.ComponentClass<DimmerDimmableProps>;

export default DimmerDimmable;
