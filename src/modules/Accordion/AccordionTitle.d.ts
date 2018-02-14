import * as React from 'react';
import { SemanticShorthandContent } from '../..';

export interface AccordionTitleProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Whether or not the title is in the open state. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent;

  /** AccordionTitle index inside Accordion. */
  index?: number | string;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>, data: AccordionTitleProps) => void;
}

declare const AccordionTitle: React.ComponentClass<AccordionTitleProps>;

export default AccordionTitle;
