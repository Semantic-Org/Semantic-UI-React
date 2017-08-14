import * as React from 'react';
import { GridOnlyProp } from '../../collections/Grid/GridColumn';

export interface BreakpointProps {
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
  onUpdate?: BreakpointOnUpdateData;

  /** Breakpoints definition. */
  points?: BreakpointPoints;
}

export interface BreakpointPoints {
  computer: number;
  largeScreen: number;
  mobile: number;
  tablet: number;
  widescreen: number;
}

export interface BreakpointOnUpdateData extends BreakpointProps {
  number: string;
}

declare const Breakpoint: React.ComponentClass<BreakpointProps>;

export default Breakpoint;
