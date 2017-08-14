import * as React from 'react';
import { SemanticShorthandContent } from '../..';

export interface StepDescriptionProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  description?: SemanticShorthandContent;
}

declare const StepDescription: React.StatelessComponent<StepDescriptionProps>;

export default StepDescription;
