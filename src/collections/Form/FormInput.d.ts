import * as React from 'react'

import { SemanticShorthandItem } from '../../generic'
import { LabelProps } from '../../elements/Label'
import { StrictInputProps } from '../../elements/Input'
import { StrictFormFieldProps } from './FormField'

export interface FormInputProps extends StrictFormInputProps {
  [key: string]: any
}

export interface StrictFormInputProps
  extends Omit<StrictFormFieldProps, 'label'>,
    StrictInputProps {
  /** An element type to render as (string or function). */
  as?: any

  /** A FormField control prop. */
  control?: any

  /** Individual fields may display an error state along with a message. */
  error?: any

  /** Shorthand for a Label. */
  label?: SemanticShorthandItem<LabelProps>
}

declare const FormInput: React.FC<FormInputProps>

export default FormInput
