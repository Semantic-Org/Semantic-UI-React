import * as React from 'react';

import { SemanticShorthandCollection, SemanticShorthandItem } from '../../';
import { AccordionContentProps } from './AccordionContent';
import { AccordionTitleProps } from './AccordionTitle';

export interface AccordionAccordionProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Index of the currently active panel. */
  activeIndex?: number | number[];

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Initial activeIndex value. */
  defaultActiveIndex?: number | number[];

  /** Only allow one panel open at a time. */
  exclusive?: boolean;

  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {number} index - The index of the clicked panel.
   */
  onTitleClick?: (event: React.MouseEvent<HTMLDivElement>, index: number | number[]) => void;

  /** Shorthand array of props for Accordion. */
  panels?: SemanticShorthandCollection<AccordionPanelProps>;
}

export interface AccordionPanelProps {
  content: SemanticShorthandItem<AccordionContentProps>;
  title: SemanticShorthandItem<AccordionTitleProps>;
}

declare const AccordionAccordion: React.ComponentClass<AccordionAccordionProps>;

export default AccordionAccordion;
