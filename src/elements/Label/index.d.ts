import * as React from 'react';
import { SemanticCOLORS, SemanticSIZES } from '../..';

export interface LabelProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A label can be active. */
  active?: boolean;

  /** A label can attach to a content segment. */
  attached?: 'top' | 'bottom' | 'top right' | 'top left' | 'bottom left' | 'bottom right';

  /** A label can reduce its complexity. */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** A label can be circular. */
  circular?: boolean;

  /** Additional classes. */
  className?: string;

  /** Color of the label. */
  color?: SemanticCOLORS;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** A label can position itself in the corner of an element. */
  corner?: boolean | 'left' | 'right';

  /** Shorthand for LabelDetail. */
  detail?: any;

  /** Formats the label as a dot. */
  empty?: any;

  /** Float above another element in the upper right corner. */
  floating?: boolean;

  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal?: boolean;

  /** Add an icon by icon name or pass an <Icon /.> */
  icon?: any;

  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image?: any;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLElement>, data: LabelProps) => void;

  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove?: (event: React.MouseEvent<HTMLElement>, data: LabelProps) => void;

  /** A label can point to content next to it. */
  pointing?: boolean | 'above' | 'below' | 'left' | 'right';

  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon?: any;

  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon?: boolean | 'right';

  /** A label can have different sizes. */
  size?: SemanticSIZES;

  /** A label can appear as a tag. */
  tag?: boolean;
}

interface LabelComponent extends React.ComponentClass<LabelProps> {
  Detail: typeof LabelDetail;
  Group: typeof LabelGroup;
}

export const Label: LabelComponent;

interface LabelDetailProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;
}

export const LabelDetail: React.StatelessComponent<LabelDetailProps>;

interface LabelGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Labels can share shapes. */
  circular: boolean;

  /** Additional classes. */
  className?: string;

  /** Label group can share colors together. */
  color?: SemanticCOLORS;

  /** Label group can share sizes together. */
  size?: SemanticSIZES;

  /** Label group can share tag formatting. */
  tag?: boolean;
}

export const LabelGroup: React.StatelessComponent<LabelGroupProps>;
