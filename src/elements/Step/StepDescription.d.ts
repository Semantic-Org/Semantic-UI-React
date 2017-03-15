import * as React from 'react';

export interface StepDescriptionProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  description?: React.ReactNode;
}

declare const StepDescription: React.StatelessComponent<StepDescriptionProps>;

export default StepDescription;
