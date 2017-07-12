import * as React from 'react';

import { default as AccordionContent } from './AccordionContent';
import { default as AccordionTitle } from './AccordionTitle';

export interface AccordionProps {
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

  /** Format to take up the width of it's container. */
  fluid?: boolean;

  /** Format for dark backgrounds. */
  inverted?: boolean;

  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {number} index - The index of the clicked panel.
   */
  onTitleClick?: (event: React.MouseEvent<HTMLDivElement>, index: number | number[]) => void;

  /**
   * Create simple accordion panels from an array of { text: <custom>, content: <custom> } objects.
   * Object can optionally define an `active` key to open/close the panel.
   * Object can opitonally define a `key` key used for title and content nodes' keys.
   * Mutually exclusive with children.
   */
  panels?: Array<any>;

  /** Adds some basic styling to accordion panels. */
  styled?: boolean;
}

interface AccordionComponent extends React.ComponentClass<AccordionProps> {
  Content: typeof AccordionContent;
  Title: typeof AccordionTitle;
}

declare const Accordion: AccordionComponent;

export default Accordion;
