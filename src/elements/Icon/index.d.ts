import { ReactMouseEvents, SemanticCOLORS, SemanticROTATION, SemanticSIZES } from '../..';
import * as React from 'react';

// Icon
// ----------------------------------
interface IconProps extends ReactMouseEvents<any> {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Formatted to appear bordered */
  bordered?: boolean,

  /** Icon can formatted to appear circular */
  circular?: boolean,

  /** Additional classes. */
  className?: string;

  /** Color of the icon. */
  color?: SemanticCOLORS,

  /** Icons can display a smaller corner icon */
  corner?: boolean,

  /** Show that the icon is inactive */
  disabled?: boolean;

  /** Fitted, without space to left or right of Icon. */
  fitted?: boolean,

  /** Icon can flipped */
  flipped?: 'horizontally' | 'vertically'

  /** Formatted to have its colors inverted for contrast */
  inverted?: boolean,

  /** Icon can be formatted as a link */
  link?: boolean,

  /** Icon can be used as a simple loader */
  loading?: boolean,

  /** Name of the icon */
  name?: string,

  /** Icon can rotated */
  rotated?: SemanticROTATION,

  /** Size of the icon. */
  size?: SemanticSIZES,
}

interface IconClass extends React.ComponentClass<IconProps> {
  Content: typeof IconGroup;
}
export const Icon: IconClass;

interface IconGroupProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Size of the icon group. */
  size?: SemanticSIZES;
}

export const IconGroup: React.ComponentClass<IconGroupProps>;
