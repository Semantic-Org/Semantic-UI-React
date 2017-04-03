import * as React from 'react';

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

  /**
   * Create simple accordion panels from an array of { text: <custom>, content: <custom> } objects.
   * Object can optionally define an `active` key to open/close the panel.
   * Object can opitonally define a `key` key used for title and content nodes' keys.
   * Mutually exclusive with children.
   */
  panels?: Array<any>;
}

declare const AccordionAccordion: AccordionAccordionProps;

export default AccordionAccordion;
