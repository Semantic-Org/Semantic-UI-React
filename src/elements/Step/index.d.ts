import { ReactMouseEvents, SemanticSIZES, SemanticVERTICALALIGNMENTS } from '../..';
import * as React from 'react';


interface StepProps extends ReactMouseEvents<any> {
  /** A step can be highlighted as active. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A step can show that a user has completed it. */
  completed?: boolean;

  /** Shorthand for StepDescription. */
  description?: any;

  /** Show that the Loader is inactive. */
  disabled?: boolean;

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href?: string;

  /** Shorthand for Icon. */
  icon?: any;

  /** A step can be link. */
  link?: boolean;

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;

  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered?: boolean;

  /** Shorthand for StepTitle. */
  title?: any;
}

interface StepClass extends React.ComponentClass<StepProps> {
  Content: typeof StepContent;
  Description: typeof StepDescription;
  Group: typeof StepGroup;
  Title: typeof StepTitle;
}

export const Step: StepClass;

interface StepContentProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for StepDescription. */
  description?: any;

  /** Shorthand for StepTitle. */
  title?: any;
}

export const StepContent: React.ComponentClass<StepContentProps>;

interface StepDescriptionProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  description?: any;
}

export const StepDescription: React.ComponentClass<StepDescriptionProps>;

interface StepGroupProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A fluid step takes up the width of its container. */
  fluid?: boolean;

  /** Shorthand array of props for Step. */
  items?: any;

  /** A step can show a ordered sequence of steps. */
  ordered?: boolean;

  /** Steps can have different sizes. */
  size?: SemanticSIZES;

  /** A step can stack vertically only on smaller screens. */
  stackable?: boolean;

  /** A step can be displayed stacked vertically. */
  vertical?: SemanticVERTICALALIGNMENTS;
}

export const StepGroup: React.ComponentClass<StepGroupProps>;

interface StepTitleProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  title?: any;
}

export const StepTitle: React.ComponentClass<StepTitleProps>;
