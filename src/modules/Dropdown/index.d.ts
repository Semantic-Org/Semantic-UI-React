import {ReactFocusEvents, ReactFormEvents, ReactMouseEvents} from '../..';
import * as React from 'react';

export type DropdownPropPointing = 'left' | 'right' | 'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right';
export type DropdownPropAdditionPosition = 'top' | 'bottom';

export interface DropdownProps extends ReactMouseEvents<HTMLElement>, ReactFocusEvents<HTMLElement>, ReactFormEvents<HTMLElement> {
  /** Label prefixed to an option added by a user. */
  additionLabel?: string;

  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition?: DropdownPropAdditionPosition;

  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions?: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A Dropdown can reduce its complexity */
  basic?: boolean;

  /** Format the Dropdown to appear as a button. */
  button?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur?: boolean;

  /** A compact dropdown has no minimum width. */
  compact?: boolean;

  /** Initial value of open. */
  defaultOpen?: boolean;

  /** Currently selected label in multi-select. */
  defaultSelectedLabel?: any;

  /** Initial value or value array if multiple. */
  defaultValue?: string|number|Array<string>|Array<number>;

  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled?: boolean;

  /** An errored dropdown can alert a user to a problem. */
  error?: boolean;

  /** A dropdown menu can contain floated content. */
  floating?: boolean;

  /** A dropdown can take the full width of its parent */
  fluid?: boolean;

  /** A dropdown menu can contain a header. */
  header?: React.ReactNode;

  /** Shorthand for Icon. */
  icon?: any;

  /** A dropdown can be formatted as a Menu item. */
  item?: boolean;

  /** A dropdown can be formatted to appear inline in other content. */
  inline?: boolean;

  /** A dropdown can be labeled. */
  labeled?: boolean;

  /** A dropdown can show that it is currently loading data. */
  loading?: boolean;

  /** A selection dropdown can allow multiple selections. */
  multiple?: boolean;

  /** Name of the hidden input which holds the value. */
  name?: string;

  /** Message to display when there are no results. */
  noResultsMessage?: string;

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem?: React.MouseEventHandler<HTMLSelectElement>;

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {string} value - Current value of search input.
   */
  onSearchChange?: React.FormEventHandler<HTMLSelectElement>;

  /** Controls whether or not the dropdown menu is displayed. */
  open?: boolean;

  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus?: boolean;

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options?: Array<DropdownItemProps>;

  /** Placeholder text. */
  placeholder?: string;

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing?: boolean | DropdownPropPointing;

  /**
   * A function that takes (data, index, defaultLabelProps) and returns
   * shorthand for Label .
   */
  renderLabel?: any;

  /** A dropdown can have its menu scroll. */
  scrolling?: boolean;

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search?: ((filteredOptions: any, searchQuery: any) => void) | boolean; // TODO -add search function;

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur?: boolean;

  /** A dropdown can be used to select between choices in a form. */
  selection?: any;

  /** A simple dropdown can open without Javascript. */
  simple?: boolean;

  /** A dropdown can receive focus. */
  tabIndex?: string;

  /** The text displayed in the dropdown, usually for the active item. */
  text?: string|React.ReactNode;

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger?: any;

  /** Current value or value array if multiple. Creates a controlled component. */
  value?: string|number|Array<string>|Array<number>;
}

interface DropdownClass extends React.ComponentClass<DropdownProps> {
  Divider: typeof DropdownDivider;
  Header: typeof DropdownHeader;
  Item: typeof DropdownItem;
  Menu: typeof DropdownMenu;
}

export const Dropdown: DropdownClass;

interface DropdownDividerProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;
}

export const DropdownDivider: React.ComponentClass<DropdownDividerProps>;

interface DropdownHeaderProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: any;

  /** Shorthand for Icon. */
  icon?: any;
}

export const DropdownHeader: React.ComponentClass<DropdownHeaderProps>;

interface DropdownItemProps extends ReactMouseEvents<HTMLElement>, ReactFocusEvents<HTMLElement>, ReactFormEvents<HTMLElement> {

  /** Style as the currently chosen item. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

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
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected?: boolean;

  /** Display text. */
  text?: any;

  /** Stored value */
  value?: number|string;
}

export const DropdownItem: React.ComponentClass<DropdownItemProps>;

interface DropdownMenuProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A dropdown menu can scroll. */
  scrolling?: boolean;
}

export const DropdownMenu: React.ComponentClass<DropdownMenuProps>;
