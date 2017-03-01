import * as React from 'react';

interface ContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Initially hidden, visible on hover. */
  hidden?: boolean;

  /** Initially visible, hidden on hover. */
  visible?: boolean;
}

declare const ButtonContent: React.StatelessComponent<ContentProps>;

export default ButtonContent;
