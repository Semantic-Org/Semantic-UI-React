import * as React from 'react';
import {SemanticCOLORS, SemanticROTATION} from '../..';

type ICON_SIZES = 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';

interface IconProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Formatted to appear bordered */
  bordered?: boolean;

  /** Icon can formatted to appear circular. */
  circular?: boolean;

  /** Additional classes. */
  className?: string;

  /** Color of the icon. */
  color?: SemanticCOLORS;

  /** Icons can display a smaller corner icon. */
  corner?: boolean;

  /** Show that the icon is inactive. */
  disabled?: boolean;

  /** Fitted, without space to left or right of Icon. */
  fitted?: boolean;

  /** Icon can flipped. */
  flipped?: 'horizontally' | 'vertically';

  /** Formatted to have its colors inverted for contrast. */
  inverted?: boolean;

  /** Icon can be formatted as a link. */
  link?: boolean;

  /** Icon can be used as a simple loader. */
  loading?: boolean;

  /** Name of the icon. */
  name?: string;

  /** Icon can rotated. */
  rotated?: SemanticROTATION;

  /** Size of the icon. */
  size?: ICON_SIZES;
}

interface IconComponent extends React.StatelessComponent<IconProps> {
  Content: typeof IconGroup;
}

export const Icon: IconComponent;

interface IconGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Size of the icon group. */
  size?: ICON_SIZES;
}

export const IconGroup: React.StatelessComponent<IconGroupProps>;
