import { StrictTextAreaProps } from '../../addons/TextArea'
import { ForwardRefComponent } from '../../generic'
import { StrictFormFieldProps } from './FormField'

export interface FormTextAreaProps extends StrictFormTextAreaProps {
  [key: string]: any
}

export interface StrictFormTextAreaProps extends StrictFormFieldProps, StrictTextAreaProps {
  /** An element type to render as (string or function). */
  as?: any

  /** A FormField control prop. */
  control?: any
}

declare const FormTextArea: ForwardRefComponent<FormTextAreaProps, HTMLTextAreaElement>

export default FormTextArea
