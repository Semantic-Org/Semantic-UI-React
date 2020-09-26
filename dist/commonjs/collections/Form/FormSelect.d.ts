import * as React from 'react'

import { StrictSelectProps } from '../../addons/Select'
import { DropdownItemProps } from '../../modules/Dropdown/DropdownItem'
import { StrictFormFieldProps } from './FormField'
import { SemanticShorthandItem } from '../../generic'
import { LabelProps } from '../../elements/Label'

export interface FormSelectProps extends StrictFormSelectProps {
  [key: string]: any
}

export interface StrictFormSelectProps extends StrictFormFieldProps, StrictSelectProps {
  /** An element type to render as (string or function). */
  as?: any

  /** A FormField control prop. */
  control?: any

  /** Individual fields may display an error state along with a message. */
  error?: any

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: DropdownItemProps[]
}

declare const FormSelect: React.StatelessComponent<FormSelectProps>

export default FormSelect
