import * as React from 'react';

export interface ListItemProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A list item can active. */
  active?: boolean;

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

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: ListItemProps) => void;

  /** A value for an ordered list. */
  value?: string;
}

declare const ListItem: React.StatelessComponent<ListItemProps>;

export default ListItem;
