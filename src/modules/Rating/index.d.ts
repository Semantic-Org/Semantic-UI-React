import * as React from 'react';

interface RatingProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /**
   * You can clear the rating by clicking on the current start rating.
   * By default a rating will be only clearable if there is 1 icon.
   * Setting to `true`/`false` will allow or disallow a user to clear their rating.
   */
  clearable?: boolean | 'auto';

  /** The initial rating value. */
  defaultRating?: number | string;

  /** You can disable or enable interactive rating.  Makes a read-only rating. */
  disabled?: boolean;

  /** A rating can use a set of star or heart icons. */
  icon?: 'star' | 'heart';

  /** The total number of icons. */
  maxRating?: number | string;

  /**
   * Called after user selects a new rating.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onRate?: (event: React.MouseEvent<HTMLDivElement>, data: RatingProps) => void;

  /** The current number of active icons. */
  rating?: number | string;

  /** A progress bar can vary in size. */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'huge' | 'massive';
}

interface RatingComponent extends React.ComponentClass<RatingProps> {
  Icon: typeof RatingIcon;
}

export const Rating: RatingComponent;

interface RatingIconProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?:any;

  /** Indicates activity of an icon. */
  active?: boolean;

  /** Additional classes. */
  className?: string;

  /** An index of icon inside Rating. */
  index?: number;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onClick?: (event: React.MouseEvent<HTMLElement>, data: RatingIconProps) => void;

  /**
   * Called on keyup.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onKeyUp?: (event: React.MouseEvent<HTMLElement>, data: RatingIconProps) => void;

  /**
   * Called on mouseenter.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>, data: RatingIconProps) => void;

  /** Indicates selection of an icon. */
  selected?: boolean;
}

export const RatingIcon: React.ComponentClass<RatingIconProps>;
