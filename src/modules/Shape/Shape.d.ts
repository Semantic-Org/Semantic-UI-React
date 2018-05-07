import * as React from 'react';
import { default as ShapeSide } from './ShapeSide';

export interface ShapeProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;
}

interface ShapeComponent extends React.ComponentClass<ShapeProps> {
  Side: typeof ShapeSide;
}

declare const Shape: ShapeComponent;

export default Shape;
