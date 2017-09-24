import * as React from 'react';
import {
  SemanticCOLORS,
  SemanticFLOATS,
  SemanticSIZES,
  SemanticWIDTHS
} from '../..';

export interface ButtonGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Groups can be attached to other content. */
  attached?: boolean | 'left' | 'right' | 'top' | 'bottom';

  /** Groups can be less pronounced. */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Groups can have a shared color. */
  color?: SemanticCOLORS;

  /** Groups can reduce their padding to fit into tighter spaces. */
  compact?: boolean;

  /** Groups can be aligned to the left or right of its container. */
  floated?: SemanticFLOATS;

  /** Groups can take the width of their container. */
  fluid?: boolean;

  /** Groups can be formatted as icons. */
  icon?: boolean;

  /** Groups can be formatted to appear on dark backgrounds. */
  inverted?: boolean;

  /** Groups can be formatted as labeled icon buttons. */
  labeled?: boolean;

  /** Groups can hint towards a negative consequence. */
  negative?: boolean;

  /** Groups can hint towards a positive consequence. */
  positive?: boolean;

  /** Groups can be formatted to show different levels of emphasis. */
  primary?: boolean;

  /** Groups can be formatted to show different levels of emphasis. */
  secondary?: boolean;

  /** Groups can have different sizes. */
  size?: SemanticSIZES;

  /** Groups can be formatted to toggle on and off. */
  toggle?: boolean;

  /** Groups can be formatted to appear vertically. */
  vertical?: boolean;

  /** Groups can have their widths divided evenly. */
  widths?: SemanticWIDTHS;
}

declare const ButtonGroup: React.StatelessComponent<ButtonGroupProps>;

export default ButtonGroup;
