import * as React from 'react';

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

interface BreadcrumbClass extends React.ComponentClass<BreadcrumbProps> {
  Divider: typeof BreadcrumbDivider;
  Section: typeof BreadcrumbSection;
}

export const Breadcrumb: BreadcrumbClass;

interface BreadcrumbDividerProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon?: any;
}

export const BreadcrumbDivider: React.StatelessComponent<BreadcrumbDividerProps>;

interface BreadcrumbSectionProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Style as the currently active section. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href?: string;

  /** Render as an `a` tag instead of a `div`. */
  link?: boolean;

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: BreadcrumbSectionProps) => void;
}

export const BreadcrumbSection: React.ComponentClass<BreadcrumbSectionProps>;
