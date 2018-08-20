import * as React from 'react'

import { TextAreaProps } from '../../addons/TextArea'
import { FormFieldProps } from './FormField'

export interface FormTextAreaProps extends FormFieldProps, TextAreaProps {
  [key: string]: any

  /** An element type to render as (string or function). */
  as?: any

  /** A FormField control prop. */
  control?: any
}

declare const FormTextArea: React.StatelessComponent<FormTextAreaProps>

export default FormTextArea
