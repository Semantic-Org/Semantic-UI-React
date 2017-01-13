import * as React from 'react';
import { ReactMouseEvents } from '../..';

// Accordion
// ----------------------------------
interface AccordionProps {

  /** Index of the currently active panel. */
  activeIndex?: number | number[];

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Initial activeIndex value. */
  defaultActiveIndex?: number | number[];

  /** Only allow one panel open at a time */
  exclusive?: boolean;

  /** Format to take up the width of it's container. */
  fluid?: boolean;

  /** Format for dark backgrounds. */
  inverted?: string;

  /** Called with (event, index) when a panel title is clicked. */
  onTitleClick?: React.MouseEventHandler<HTMLDivElement>;

  /**
   * Create simple accordion panels from an array of { text: <string>, content: <custom> } objects.
   * Object can optionally define an `active` key to open/close the panel.
   * Mutually exclusive with children.
   * TODO: AccordionPanel should be a sub-component
   */
  panels?: any;

  /** Adds some basic styling to accordion panels. */
  styled?: boolean;
}

interface AccordionClass extends React.ComponentClass<AccordionProps> {
  Content: typeof AccordionContent;
  Title: typeof AccordionTitle;
}

export const Accordion: AccordionClass;


interface AccordionContentProps {
  /** Whether or not the content is visible. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const AccordionContent: React.ComponentClass<AccordionContentProps>;

interface AccordionTitleProps extends ReactMouseEvents<HTMLElement> {

  /** Whether or not the title is in the open state. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const AccordionTitle: React.ComponentClass<AccordionTitleProps>;
