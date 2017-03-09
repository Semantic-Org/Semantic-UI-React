import * as React from 'react';

interface OrProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;
}

declare const ButtonOr: React.StatelessComponent<OrProps>;

export default ButtonOr;
