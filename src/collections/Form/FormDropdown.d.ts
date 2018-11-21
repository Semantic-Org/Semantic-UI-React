import * as React from 'react'

import { StrictDropdownProps } from '../../modules/Dropdown'
import { StrictFormFieldProps } from './FormField'

export interface FormDropdownProps<T = any> extends StrictFormDropdownProps<T> {
  [key: string]: any
}

export interface StrictFormDropdownProps<T> extends StrictFormFieldProps, StrictDropdownProps<T> {
  /** An element type to render as (string or function). */
  as?: any

  /** A FormField control prop. */
  control?: any
}

declare const FormDropdown: React.StatelessComponent<FormDropdownProps>

export default FormDropdown
