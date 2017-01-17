import { ReactMouseEvents, SemanticSIZES } from '../..';
import * as React from 'react';

interface RatingProps {
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
  defaultRating?: string|number;

  /** You can disable or enable interactive rating.  Makes a read-only rating. */
  disabled?:boolean;

  /** A rating can use a set of star or heart icons. */
  icon?: 'star'|'heart';

  /** The total number of icons. */
  maxRating?: string|number;

  /**
   * Called after user selects a new rating.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onRate?: React.MouseEventHandler<HTMLDivElement>;

  /** The current number of active icons. */
  rating?: string|number;

  /** A progress bar can vary in size. */
  size?: SemanticSIZES;
}

interface RatingClass extends React.ComponentClass<RatingProps> {
  Icon: typeof RatingIcon;
}

export const Rating: RatingClass;

interface RatingIconProps extends ReactMouseEvents<HTMLElement> {
  /** Indicates activity of an icon. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?:any;

  /** Additional classes. */
  className?: string;

  /** An index of icon inside Rating. */
  index?: number;

  /** Indicates selection of an icon. */
  selected?: boolean;
}

export const RatingIcon: React.ComponentClass<RatingIconProps>;
