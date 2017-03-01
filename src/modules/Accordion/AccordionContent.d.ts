import * as React from 'react';

interface AccordionContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Whether or not the content is visible. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const AccordionContent: React.StatelessComponent<AccordionContentProps>;

export default AccordionContent;
