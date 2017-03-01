import * as React from 'react';

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

declare const BreadcrumbSection: React.ComponentClass<BreadcrumbSectionProps>;

export default BreadcrumbSection;
