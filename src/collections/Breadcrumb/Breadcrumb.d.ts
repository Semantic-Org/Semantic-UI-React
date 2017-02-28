import * as React from 'react';

import BreadcrumbDivider from './BreadcrumbDivider';
import BreadcrumbSection from './BreadcrumbSection';

interface BreadcrumbProps {
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

const Breadcrumb: BreadcrumbComponent;

export default Breadcrumb;
