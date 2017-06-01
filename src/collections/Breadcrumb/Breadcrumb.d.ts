import * as React from 'react';

import { default as BreadcrumbDivider } from './BreadcrumbDivider';
import { default as BreadcrumbSection } from './BreadcrumbSection';

export interface BreadcrumbProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content of the Breadcrumb.Divider. */
  divider?: React.ReactNode;

  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider.
   */
  icon?: any;

  /** Shorthand array of props for Breadcrumb.Section. */
  sections?: Array<any>;

  /** Size of Breadcrumb */
  size?:  'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';
}

interface BreadcrumbComponent extends React.ComponentClass<BreadcrumbProps> {
  Divider: typeof BreadcrumbDivider;
  Section: typeof BreadcrumbSection;
}

declare const Breadcrumb: BreadcrumbComponent;

export default Breadcrumb;
