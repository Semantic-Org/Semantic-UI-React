import * as React from 'react';
import { SemanticCOLORS } from '../..';

export interface MenuItemProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A menu item can be active. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Additional colors can be specified. */
  color?: SemanticCOLORS;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** A menu item can be disabled. */
  disabled?: boolean;

  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted?: boolean | 'horizontally' | 'vertically';

  /** A menu item may include a header or may itself be a header. */
  header?: boolean;

  /** MenuItem can be only icon. */
  icon?: any | boolean;

  /** MenuItem index inside Menu. */
  index?: number;

  /** A menu item can be link. */
  link?: boolean;

  /** Internal name of the MenuItem. */
  name?: string;

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => void;

  /** A menu item can take right position. */
  position?: 'right';
}

declare const MenuItem: React.ComponentClass<MenuItemProps>;

export default MenuItem;
