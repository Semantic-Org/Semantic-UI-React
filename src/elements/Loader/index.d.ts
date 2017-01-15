import * as React from 'react';
import { SemanticSIZES } from '../..';

interface LoaderProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A loader can be active or visible. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** A loader can be disabled or hidden. */
  disabled?: boolean;

  /** A loader can show it's unsure of how long a task will take. */
  indeterminate?: boolean;

  /** Loaders can appear inline with content. */
  inline?: boolean | 'centered';

  /** Loaders can have their colors inverted. */
  inverted?: boolean;

  /** Loaders can have different sizes. */
  size?: SemanticSIZES;
}

export const Loader: React.StatelessComponent<LoaderProps>;
