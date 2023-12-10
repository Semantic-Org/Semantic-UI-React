import { StrictDropdownProps } from '../../modules/Dropdown'
import { ForwardRefComponent } from '../../generic'
import { StrictFormFieldProps } from './FormField'

export interface FormDropdownProps extends StrictFormDropdownProps {
  [key: string]: any
}

export interface StrictFormDropdownProps extends StrictFormFieldProps, StrictDropdownProps {
  /** An element type to render as (string or function). */
  as?: any

  /** A FormField control prop. */
  control?: any

  /** Individual fields may display an error state along with a message. */
  error?: any
}

declare const FormDropdown: ForwardRefComponent<FormDropdownProps, HTMLDivElement>

export default FormDropdown
