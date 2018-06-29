import * as React from 'react'

import { DropdownProps } from '../../modules/Dropdown'
import { FormFieldProps } from './FormField'

export interface FormDropdownProps extends FormFieldProps, DropdownProps {
  [key: string]: any

  /** An element type to render as (string or function). */
  as?: any

  /** A FormField control prop. */
  control?: any
}

declare const FormDropdown: React.StatelessComponent<FormDropdownProps>

export default FormDropdown
