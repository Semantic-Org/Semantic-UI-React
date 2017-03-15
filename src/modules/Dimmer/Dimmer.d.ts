import * as React from 'react';
import DimmerDimmable from './DimmerDimmable';

export interface DimmerProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** An active dimmer will dim its parent container. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** A disabled dimmer cannot be activated */
  disabled?: boolean;

  /**
   * Called when the dimmer is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>, data: DimmerProps) => void;

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside?: (event: React.MouseEvent<HTMLDivElement>, data: DimmerProps) => void;

  /** A dimmer can be formatted to have its colors inverted. */
  inverted?: boolean;

  /** A dimmer can be formatted to be fixed to the page. */
  page?: boolean;

  /** A dimmer can be controlled with simple prop. */
  simple?: boolean;
}

interface DimmerComponent extends React.ComponentClass<DimmerProps> {
  Dimmable: typeof DimmerDimmable;
}

declare const Dimmer: DimmerComponent;

export default Dimmer;
