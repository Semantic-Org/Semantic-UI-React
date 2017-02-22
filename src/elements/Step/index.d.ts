import * as React from 'react';

interface StepProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A step can be highlighted as active. */
  active?: boolean;

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
   * Called on click. When passed, the component will render as an `a`.
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: StepProps) => void;

  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered?: boolean;

  /** Shorthand for StepTitle. */
  title?: any;
}

interface StepComponent extends React.ComponentClass<StepProps> {
  Content: typeof StepContent;
  Description: typeof StepDescription;
  Group: typeof StepGroup;
  Title: typeof StepTitle;
}

export const Step: StepComponent;

interface StepContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for StepDescription. */
  description?: React.ReactNode;

  /** Shorthand for StepTitle. */
  title?: any;
}

export const StepContent: React.StatelessComponent<StepContentProps>;

interface StepDescriptionProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  description?: React.ReactNode;
}

export const StepDescription: React.StatelessComponent<StepDescriptionProps>;

interface StepGroupProps {
  [key: string]: any;

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
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive';

  /** A step can stack vertically only on smaller screens. */
  stackable?: 'tablet';

  /** A step can be displayed stacked vertically. */
  vertical?: boolean;
}

export const StepGroup: React.StatelessComponent<StepGroupProps>;

interface StepTitleProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  title?: React.ReactNode;
}

export const StepTitle: React.StatelessComponent<StepTitleProps>;
