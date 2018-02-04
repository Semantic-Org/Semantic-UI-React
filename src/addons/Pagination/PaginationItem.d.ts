import * as React from 'react';

export interface PaginationItemProps {
  [key: string]: any;

  /** A pagination item can be active. */
  active?: boolean;

  /** A pagination item can have an aria label. */
  ariaLabel?: string;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationItemProps) => void;

  /**
   * Called on key down.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyDown?: (event: React.MouseEvent<HTMLAnchorElement>, data: PaginationItemProps) => void;

  /** A pagination should have a type. */
  type?: 'ellipsisItem' | 'firstItem' | 'prevItem' | 'pageItem' | 'nextItem' | 'lastItem';
}

declare class PaginationItem extends React.Component<PaginationItemProps, {}> {
}

export default PaginationItem;
