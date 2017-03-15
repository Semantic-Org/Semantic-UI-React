import * as React from 'react';

export interface PopupContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const PopupContent: React.StatelessComponent<PopupContentProps>;

export default PopupContent;
