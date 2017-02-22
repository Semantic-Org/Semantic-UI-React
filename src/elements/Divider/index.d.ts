import * as React from 'react';

interface DividerProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Divider can clear the content above it. */
  clearing?: boolean;

  /** Divider can be fitted without any space above or below it. */
  fitted?: boolean;

  /** Divider can divide content without creating a dividing line. */
  hidden?: boolean;

  /** Divider can segment content horizontally. */
  horizontal?: boolean;

  /** Divider can have it's colours inverted. */
  inverted?: boolean;

  /** Divider can provide greater margins to divide sections of content. */
  section?: boolean;

  /** Divider can segment content vertically. */
  vertical?: boolean;
}

export const Divider: React.StatelessComponent<DividerProps>;
