import * as React from 'react';
import { SemanticCOLORS, SemanticWIDTHS } from '../..';

export interface MenuProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Index of the currently active item. */
  activeIndex?: number;

  /** A menu may be attached to other content segments. */
  attached?: boolean | 'bottom' | 'top';

  /** A menu item or menu can have no borders. */
  borderless?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Additional colors can be specified. */
  color?: SemanticCOLORS;

  /** A menu can take up only the space necessary to fit its content. */
  compact?: boolean;

  /** Initial activeIndex value. */
  defaultActiveIndex?: number;

  /** A menu can be fixed to a side of its context. */
  fixed?: 'left'| 'right'| 'bottom'| 'top';

  /** A menu can be floated. */
  floated?: boolean | 'right';

  /** A vertical menu may take the size of its container. */
  fluid?: boolean;

  /** A menu may have labeled icons. */
  icon?: boolean | 'labeled';

  /** A menu may have its colors inverted to show greater contrast. */
  inverted?: boolean;

  /** Shorthand array of props for Menu. */
  items?: Array<any>;

  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => void;

  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination?: boolean;

  /** A menu can point to show its relationship to nearby content. */
  pointing?: boolean;

  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary?: boolean;

  /** A menu can vary in size. */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'huge' | 'massive';

  /** A menu can stack at mobile resolutions. */
  stackable?: boolean;

  /** A menu can be formatted to show tabs of information. */
  tabular?: boolean | 'right';

  /** A menu can be formatted for text content. */
  text?: boolean;

  /** A vertical menu displays elements vertically. */
  vertical?: boolean;

  /** A menu can have its items divided evenly. */
  widths?: SemanticWIDTHS;
}

interface MenuComponent extends React.ComponentClass<MenuProps> {
  Header: typeof MenuHeader;
  Item: typeof MenuItem;
  Menu: typeof MenuMenu;
}

export const Menu: MenuComponent;

interface MenuHeaderProps {
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
export const MenuHeader: React.ComponentClass<MenuHeaderProps>;

interface MenuItemProps {
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

export const MenuItem: React.ComponentClass<MenuItemProps>;

interface MenuMenuProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A sub menu can take right position. */
  position?: 'right';
}

export const MenuMenu: React.StatelessComponent<MenuMenuProps>;
