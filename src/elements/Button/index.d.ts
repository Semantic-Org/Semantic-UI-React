import * as React from 'react';
import {
  ReactMouseEvents,
  SemanticCOLORS,
  SemanticSOCIAL,
  SemanticFLOATS,
  SemanticSIZES,
  SemanticWIDTHSSTRING,
  SemanticWIDTHSNUMBER
} from '../../index';

export type SemanticButtonLABELPOSITIONS = 'right' | 'left';

export interface ButtonProps extends ReactMouseEvents<HTMLButtonElement> {
  /** An element type to render as (string or function). */
  as?: any;

  /** A button can show it is currently the active user selection */
  active?: boolean;

  /** A button can animate to show hidden content */
  animated?: 'fade' | 'vertical';

  /** A button can be attached to the top or bottom of other content */
  attached?: 'left' | 'right' | 'top' | 'bottom';

  /** A basic button is less pronounced */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** A button can be circular */
  circular?: boolean;

  /** Additional classes. */
  className?: string;

  /** A button can have different colors */
  color?: SemanticCOLORS | SemanticSOCIAL;

  /** A button can reduce its padding to fit into tighter spaces */
  compact?: boolean;

  /** Shorthand for primary content. */
  content?: any;

  /** A button can show it is currently unable to be interacted with */
  disabled?: boolean;

  /** A button can be aligned to the left or right of its container */
  floated?: SemanticFLOATS;

  /** A button can take the width of its container */
  fluid?: boolean;

  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon?: any;

  /** A button can be formatted to appear on dark backgrounds */
  inverted?: boolean;

  /** Add a Label by text, props object, or pass a <Label /> */
  label?: any;

  /** A labeled button can format a Label or Icon to appear on the left or right */
  labelPosition?: SemanticButtonLABELPOSITIONS;

  /** A button can show a loading indicator */
  loading?: boolean;

  /** A button can hint towards a negative consequence */
  negative?: boolean;

  /** A button can hint towards a positive consequence */
  positive?: boolean;

  /** A button can be formatted to show different levels of emphasis */
  primary?: boolean;

  /** A button can be formatted to show different levels of emphasis */
  secondary?: boolean;

  /** A button can have different sizes */
  size?: SemanticSIZES;

  /** A button can be formatted to toggle on and off */
  toggle?: boolean;

  // TODO why not in list?
  type?: string;
}

interface ButtonClass extends React.ComponentClass<ButtonProps> {
  Content: typeof ButtonContent;
  Group: typeof ButtonGroup;
  Or: typeof ButtonOr;
}

export const Button: ButtonClass;

interface ContentProps {
  /** An element type to render as (string or function). */
    as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Initially hidden, visible on hover */
  hidden?: boolean;

  /** Initially visible, hidden on hover */
  visible?: boolean;
}

export const ButtonContent: React.ComponentClass<ContentProps>;

interface GroupProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** A button can be attached to the top or bottom of other content */
  attached?: string;

  /** Groups can be less pronounced */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Groups can have a shared color */
  color?: SemanticCOLORS | SemanticSOCIAL;

  /** Groups can be formatted as icons */
  icon?: any;

  /** Groups can be formatted as labeled icon buttons */
  labeled?: boolean;

  /** Groups can have different sizes */
  size?: SemanticSIZES;

  /** Groups can have their widths divided evenly */
  widths?: number | SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER;
}

export const ButtonGroup: React.ComponentClass<GroupProps>;

interface OrProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;
}

export const ButtonOr: React.ComponentClass<OrProps>;
