import * as React from 'react';

interface DimmerProps {

  /** An active dimmer will dim its parent container. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** A disabled dimmer cannot be activated */
  disabled?: boolean;

  /**
   * Called when the dimmer is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside?: React.MouseEventHandler<HTMLDivElement>;

  /** A dimmer can be formatted to have its colors inverted. */
  inverted?: boolean;

  /** A dimmer can be formatted to be fixed to the page. */
  page?: boolean;

  /** A dimmer can be controlled with simple prop. */
  simple?: boolean;
  
}

interface DimmerClass extends React.ComponentClass<DimmerProps> {
  Dimmable: typeof DimmerDimmable;
}

export const Dimmer: DimmerClass;

interface DimmerDimmableProps {
  
  /** An element type to render as (string or function). */
  as?: any;

  /** A dimmable element can blur its contents. */
  blurring?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Controls whether or not the dim is displayed. */
  dimmed?: boolean;
}

export const DimmerDimmable: React.ComponentClass<DimmerDimmableProps>;
