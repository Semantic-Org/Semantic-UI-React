import * as React from 'react';

export interface ResponsiveProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Fires callbacks immediately after mount. */
  fireOnMount?: boolean;

  /** The maximum width at which content will be displayed. */
  maxWidth?: number | string;

  /** The minimum width at which content will be displayed. */
  minWidth?: number | string;

  /**
   * Called on update.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onUpdate?: (event: React.SyntheticEvent<HTMLElement>, data: ResponsiveOnUpdateData) => void;
}

export interface ResponsiveOnUpdateData extends ResponsiveProps {
  width: string;
}

export interface ResponsiveWidthShorthand {
  minWidth: number;
  maxWidth?: number;
}

declare class Responsive extends React.Component<ResponsiveProps, {}> {
  static onlyMobile: ResponsiveWidthShorthand;
  static onlyTablet: ResponsiveWidthShorthand;
  static onlyComputer: ResponsiveWidthShorthand;
  static onlyLargeScreen: ResponsiveWidthShorthand;
  static onlyWidescreen: ResponsiveWidthShorthand;
}

export default Responsive;
