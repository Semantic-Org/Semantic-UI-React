import * as React from 'react';
import { GridOnlyProp } from '../../collections/Grid/GridColumn';

export interface ResponsiveProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** A row can appear only for a specific device, or screen sizes. */
  only: GridOnlyProp;

  /**
   * Called on update.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onUpdate?: ResponsiveOnUpdateData;

  /** Responsives definition. */
  breakpoints?: ResponsivePoints;
}

export interface ResponsivePoints {
  computer: number;
  largeScreen: number;
  mobile: number;
  tablet: number;
  widescreen: number;
}

export interface ResponsiveOnUpdateData extends ResponsiveProps {
  number: string;
}

declare const Responsive: React.ComponentClass<ResponsiveProps>;

export default Responsive;
