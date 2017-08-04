import * as React from 'react';

export interface DropdownItemProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Style as the currently chosen item. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;

  /** Additional text with less emphasis. */
  description?: any;

  /** A dropdown item can be disabled. */
  disabled?: boolean;

  /** Shorthand for Flag. */
  flag?: any;

  /** Shorthand for Icon. */
  icon?: any;

  /** Shorthand for Image. */
  image?: any;

  /** Shorthand for Label. */
  label?: any;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>, data: DropdownItemProps) => void;

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected?: boolean;

  /** Display text. */
  text?: React.ReactNode;

  /** Stored value. */
  value?: number | string;
}

declare const DropdownItem: React.ComponentClass<DropdownItemProps>;

export default DropdownItem;
