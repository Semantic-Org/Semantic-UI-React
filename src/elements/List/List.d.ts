import * as React from 'react';

import {
  SemanticFLOATS,
  SemanticSIZES,
  SemanticVERTICALALIGNMENTS
} from '../..';
import { default as ListContent } from './ListContent';
import { default as ListDescription } from './ListDescription';
import { default as ListHeader } from './ListHeader';
import { default as ListIcon } from './ListIcon';
import { default as ListItem, ListItemProps } from './ListItem';
import { default as ListList } from './ListList';

export interface ListProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A list can animate to set the current item apart from the list. */
  animated?: boolean;

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
  items?: Array<any>;

  /** A list can be specially formatted for navigation links. */
  link?: boolean;

  /**
   * onClick handler for ListItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: ListItemProps) => void;

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

interface ListComponent extends React.StatelessComponent<ListProps> {
  Content: typeof ListContent;
  Description: typeof ListDescription;
  Header: typeof ListHeader;
  Icon: typeof ListIcon;
  Item: typeof ListItem;
  List: typeof ListList;
}

declare const List: ListComponent;

export default List;
