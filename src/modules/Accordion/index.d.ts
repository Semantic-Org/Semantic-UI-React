import * as React from 'react';

interface AccordionProps {
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
  inverted?: string;

  /** Called with (event, index) when a panel title is clicked. */
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

interface AccordionClass extends React.ComponentClass<AccordionProps> {
  Content: typeof AccordionContent;
  Title: typeof AccordionTitle;
}

export const Accordion: AccordionClass;

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

export const AccordionContent: React.StatelessComponent<AccordionContentProps>;

interface AccordionTitleProps {
  [key: string]: any;

  /** Whether or not the title is in the open state. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>, data: AccordionTitleProps) => void;
}

export const AccordionTitle: React.ComponentClass<AccordionTitleProps>;
