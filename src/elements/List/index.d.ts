import { ReactMouseEvents, SemanticFLOATS, SemanticSIZES, SemanticVERTICALALIGNMENTS } from '../..';
import * as React from 'react';

interface ListProps extends ReactMouseEvents<any> {
  animated?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** A list can mark items with a bullet. */
  bulleted?: boolean;

  /** A list can divide its items into cells. */
  celled?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A list can show divisions between content. */
  divided?: boolean;

  /** An list can be floated left or right. */
  floated?: SemanticFLOATS;

  /** A list can be formatted to have items appear horizontally. */
  horizontal?: boolean;

  /** A list can be inverted to appear on a dark background. */
  inverted?: boolean;

  /** Shorthand array of props for ListItem. */
  items?: any;

  /** A list can be specially formatted for navigation links. */
  link?: boolean;

  /** A list can be ordered numerically. */
  ordered?: boolean;

  /** A list can relax its padding to provide more negative space. */
  relaxed?: boolean | 'very';

  /** A selection list formats list items as possible choices. */
  selection?: boolean;

  /** A list can vary in size. */
  size?: SemanticSIZES;

  /** An element inside a list can be vertically aligned. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

interface ListClass extends React.ComponentClass<ListProps> {
  Content: typeof ListContent;
  Description: typeof ListDescription;
  Header: typeof ListHeader;
  Icon: typeof ListIcon;
  Item: typeof ListItem;
  List: typeof ListList;
}

export const List: ListClass;

interface ListContentProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for ListDescription. */
  description?: any;

  /** An list content can be floated left or right. */
  floated?: SemanticFLOATS;

  /** Shorthand for ListHeader. */
  header?: any;

  /** An element inside a list can be vertically aligned. */
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

export const ListContent: React.ComponentClass<ListContentProps>;

interface ListDescriptionProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ListDescription: React.ComponentClass<ListDescriptionProps>;

interface ListHeaderProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;
}

export const ListHeader: React.ComponentClass<ListHeaderProps>;

interface ListIconProps extends ReactMouseEvents<any> {
  /** Additional classes. */
  className?: string;

  /** An element inside a list can be vertically aligned. */
  name?: string;
  verticalAlign?: SemanticVERTICALALIGNMENTS;
}

export const ListIcon: React.ComponentClass<ListIconProps>;

interface ListItemProps extends ReactMouseEvents<any> {
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for ListDescription. */
  description?: any;

  /** A list item can disabled. */
  disabled?: boolean;

  /** Shorthand for ListHeader. */
  header?: any;

  /** Shorthand for ListIcon. */
  icon?: any;

  /** Shorthand for Image. */
  image?: any;

  /** A value for an ordered list. */
  value?: string;
}

export const ListItem: React.ComponentClass<ListItemProps>;

interface ListListProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const ListList: React.ComponentClass<ListListProps>;
