import { ForwardRefComponent } from '../../generic'

export interface DropdownSearchInputProps extends StrictDropdownSearchInputProps {
  [key: string]: any
}

export interface StrictDropdownSearchInputProps {
  /** An element type to render as (string or function). */
  as?: any

  /** An input can have the auto complete. */
  autoComplete?: string

  /** Additional classes. */
  className?: string

  /**
   * Called on change.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, data: DropdownSearchInputProps) => void

  /** An input can receive focus. */
  tabIndex?: number | string

  /** The HTML input type. */
  type?: string

  /** Stored value. */
  value?: number | string
}

declare const DropdownSearchInput: ForwardRefComponent<DropdownSearchInputProps, HTMLInputElement>

export default DropdownSearchInput
