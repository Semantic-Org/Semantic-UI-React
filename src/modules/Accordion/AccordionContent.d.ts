import * as React from 'react';

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
  content?: any;
}

declare const AccordionContent: React.StatelessComponent<AccordionContentProps>;

export default AccordionContent;
