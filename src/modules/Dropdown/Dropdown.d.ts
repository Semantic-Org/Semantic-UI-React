import * as React from 'react';

import { LabelProps } from '../../elements/Label';
import { default as DropdownDivider } from './DropdownDivider';
import { default as DropdownHeader } from './DropdownHeader';
import { default as DropdownItem, DropdownItemProps } from './DropdownItem';
import { default as DropdownMenu } from './DropdownMenu';

export interface DropdownProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Label prefixed to an option added by a user. */
  additionLabel?: number | string;

  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition?: 'top' | 'bottom';

  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions?: boolean;

  /** A Dropdown can reduce its complexity. */
  basic?: boolean;

  /** Format the Dropdown to appear as a button. */
  button?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur?: boolean;

  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange?: boolean;

  /** A compact dropdown has no minimum width. */
  compact?: boolean;

  /** Initial value of open. */
  defaultOpen?: boolean;

  /** Currently selected label in multi-select. */
  defaultSelectedLabel?: number | string;

  /** Initial value or value array if multiple. */
  defaultValue?: string | number | Array<number | string >;

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

  /** A dropdown can be formatted to appear inline in other content. */
  inline?: boolean;

  /** A dropdown can be formatted as a Menu item. */
  item?: boolean;

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
  onAddItem?: (event: React.KeyboardEvent<HTMLElement>, data: DropdownProps) => void;

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur?: (event: React.KeyboardEvent<HTMLElement>, data: DropdownProps) => void;

  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange?: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void;

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.KeyboardEvent<HTMLElement>, data: DropdownProps) => void;

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose?: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void;

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus?: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void;

  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick?: (event: React.MouseEvent<HTMLElement>, data: LabelProps) => void;

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown?: (event: React.MouseEvent<HTMLElement>, data: DropdownProps) => void;

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen?: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void;

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {string} value - Current value of search input.
   */
  onSearchChange?: (event: React.SyntheticEvent<HTMLElement>, value: string) => void;

  /** Controls whether or not the dropdown menu is displayed. */
  open?: boolean;

  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus?: boolean;

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options?: Array<DropdownItemProps>;

  /** Placeholder text. */
  placeholder?: string;

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing?: boolean | 'left' | 'right' | 'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right';

  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel?: (item: DropdownItemProps, index: number, defaultLabelProps: LabelProps) => React.ReactElement<any>;

  /** A dropdown can have its menu scroll. */
  scrolling?: boolean;

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search?: boolean | ((options: Array<DropdownItemProps>, value: string) => Array<DropdownItemProps>);

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur?: boolean;

  /** A dropdown can be used to select between choices in a form. */
  selection?: any;

  /** A simple dropdown can open without Javascript. */
  simple?: boolean;

  /** A dropdown can receive focus. */
  tabIndex?: number | string;

  /** The text displayed in the dropdown, usually for the active item. */
  text?: string|React.ReactNode;

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger?: React.ReactNode;

  /** Current value or value array if multiple. Creates a controlled component. */
  value?: number | string | Array<number | string>;
}

interface DropdownComponent extends React.ComponentClass<DropdownProps> {
  Divider: typeof DropdownDivider;
  Header: typeof DropdownHeader;
  Item: typeof DropdownItem;
  Menu: typeof DropdownMenu;
}

declare const Dropdown: DropdownComponent;

export default Dropdown;
