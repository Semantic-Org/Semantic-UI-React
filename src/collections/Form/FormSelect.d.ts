import * as React from 'react'

import { StrictSelectProps } from '../../addons/Select'
import { DropdownItemProps } from '../../modules/Dropdown/DropdownItem'
import { StrictFormFieldProps } from './FormField'

export interface FormSelectProps<T = any> extends StrictFormSelectProps<T> {
  [key: string]: any
}

export interface StrictFormSelectProps<T> extends StrictFormFieldProps, StrictSelectProps<T> {
  /** An element type to render as (string or function). */
  as?: any

  /** A FormField control prop. */
  control?: any

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: DropdownItemProps<T>[]
}

declare const FormSelect: React.StatelessComponent<FormSelectProps>

export default FormSelect
