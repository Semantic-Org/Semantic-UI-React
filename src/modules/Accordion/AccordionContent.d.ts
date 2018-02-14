import * as React from 'react';
import { SemanticShorthandContent } from '../..';

export interface AccordionContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Whether or not the content is visible. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent;
}

declare const AccordionContent: React.StatelessComponent<AccordionContentProps>;

export default AccordionContent;
