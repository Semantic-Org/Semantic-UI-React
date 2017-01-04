import {
    ReactMouseEvents,
    SemanticCOLORS,
    SemanticFLOATS,
    SemanticSIZES,
    SemanticWIDTHSNUMBER,
    SemanticWIDTHSSTRING
} from '../..';
import * as React from 'react';

export type MenuPropsIcon = 'labeled';
export type MenuPropsTabular = 'right';
export type MenuPropsFixed = 'left'| 'right'| 'bottom'| 'top';
export type MenuPropsAttached = 'bottom' | 'top';

export interface MenuProps {
  activeIndex?: number;
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A menu may be attached to other content segments. */
  attached?: boolean | MenuPropsAttached;

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
  fixed?: MenuPropsFixed;

  /** A menu can be floated. */
  floated?: boolean | SemanticFLOATS;

  /** A vertical menu may take the size of its container. */
  fluid?: boolean;

  /** A menu may have labeled icons. */
  icon?: boolean | MenuPropsIcon;

  /** A menu may have its colors inverted to show greater contrast. */
  inverted?: boolean;

  /** Shorthand array of props for Menu. */
  items?: any;  // TODO - check type;

  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick?: React.MouseEventHandler<HTMLDivElement>;
  
  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination?: boolean;

  /** A menu can point to show its relationship to nearby content. */
  pointing?: boolean;

  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary?: boolean;

  /** A menu can vary in size. */
  size?: SemanticSIZES;  // TODO - remove medium and big.
  
  /** A menu can stack at mobile resolutions. */
  stackable?: boolean;

  /** A menu can be formatted to show tabs of information. */
  tabular?: boolean | MenuPropsTabular;

  /** A menu can be formatted for text content. */
  text?: boolean;

  /** A vertical menu displays elements vertically. */
  vertical?: boolean;

  /** A menu can have its items divided evenly. */
  widths?: number|SemanticWIDTHSSTRING | SemanticWIDTHSNUMBER| number;
}

interface MenuClass extends React.ComponentClass<MenuProps> {
  Header: typeof MenuHeader;
  Item: typeof MenuItem;
  Menu: typeof MenuMenuItem;
}

export const Menu: MenuClass;

interface MenuHeaderProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}
export const MenuHeader: React.ComponentClass<MenuHeaderProps>;

interface MenuItemProps extends ReactMouseEvents<HTMLElement> {
  /** A menu item can be active. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Additional colors can be specified. */
  color?: SemanticCOLORS;

  /** Shorthand for primary content. */
  content?: string;

  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted?: boolean | 'horizontally' | 'vertically';

  /** A menu item may include a header or may itself be a header. */
  header?: boolean;

  /** Add an icon by icon name or pass an <Icon /.> */
  icon?: any; // TODO - check type.

  /** MenuItem index inside Menu. */
  index?: number;

  /** A menu item can be link. */
  link?: boolean;

  /** Internal name of the MenuItem. */
  name?: string;

  /** A menu item can take right position. */
  position?: 'right';
}
export const MenuItem: React.ComponentClass<MenuItemProps>;

interface MenuMenuProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A sub menu can take right position. */
  position?: 'right';
}
export const MenuMenuItem: React.ComponentClass<MenuMenuProps>;
