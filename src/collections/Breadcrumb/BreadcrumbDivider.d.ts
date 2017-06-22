import * as React from 'react';

import { SemanticShorthandContent, SemanticShorthandItem } from '../..';
import { IconProps } from '../../elements/Icon';

export interface BreadcrumbDividerProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent;

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon?: SemanticShorthandItem<IconProps>;
}

declare const BreadcrumbDivider: React.StatelessComponent<BreadcrumbDividerProps>;

export default BreadcrumbDivider;
