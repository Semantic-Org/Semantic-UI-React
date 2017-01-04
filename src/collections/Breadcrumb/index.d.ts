import { ReactMouseEvents, SemanticSIZES } from '../..';
import * as React from 'react';

interface BreadcrumbProps extends ReactMouseEvents<HTMLElement> {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content of the Breadcrumb.Divider. */
  divider?: any;

  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider. */
  icon?: any;

  /** Shorthand array of props for Breadcrumb.Section. */
  sections?: Array<any>;

  /** Size of Breadcrumb */
  size?: SemanticSIZES;
}

interface BreadcrumbClass extends React.ComponentClass<BreadcrumbProps> {
  Divider: typeof BreadcrumbDivider;
  Section: typeof BreadcrumbSection;
}

export const Breadcrumb: BreadcrumbClass;

interface BreadcrumbDividerProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon?: any;
}

export const BreadcrumbDivider: React.ComponentClass<BreadcrumbDividerProps>;

interface BreadcrumbSectionProps {
  
  /** Style as the currently active section. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

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
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const BreadcrumbSection: React.ComponentClass<BreadcrumbSectionProps>;
