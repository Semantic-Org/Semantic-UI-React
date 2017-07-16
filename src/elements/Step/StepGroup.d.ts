import * as React from 'react';

import { SemanticShorthandCollection } from '../..';
import { StepProps } from './Step';

export interface StepGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A fluid step takes up the width of its container. */
  fluid?: boolean;

  /** Shorthand array of props for Step. */
  items?: SemanticShorthandCollection<StepProps>;

  /** A step can show a ordered sequence of steps. */
  ordered?: boolean;

  /** Steps can have different sizes. */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';

  /** A step can stack vertically only on smaller screens. */
  stackable?: 'tablet';

  /** A step can prevent itself from stacking on mobile. */
  unstackable?: boolean;

  /** A step can be displayed stacked vertically. */
  vertical?: boolean;
}

declare const StepGroup: React.StatelessComponent<StepGroupProps>;

export default StepGroup;
