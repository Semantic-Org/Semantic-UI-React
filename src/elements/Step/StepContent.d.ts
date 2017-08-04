import * as React from 'react';

export interface StepContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for StepDescription. */
  description?: React.ReactNode;

  /** Shorthand for StepTitle. */
  title?: any;
}

declare const StepContent: React.StatelessComponent<StepContentProps>;

export default StepContent;
