import * as React from 'react';
import { ICON_SIZES } from './Icon';

interface IconGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Size of the icon group. */
  size?: ICON_SIZES;
}

const IconGroup: React.StatelessComponent<IconGroupProps>;

export default IconGroup;
