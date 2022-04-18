import * as React from 'react'

import { SemanticShorthandItem } from '../../generic'
import { StrictButtonProps } from '../../elements/Button'
import { LabelProps } from '../../elements/Label'
import { StrictFormFieldProps } from './FormField'

export interface FormButtonProps extends StrictFormButtonProps {
  [key: string]: any
}

export interface StrictFormButtonProps
  extends Omit<StrictFormFieldProps, 'label'>,
    Omit<StrictButtonProps, 'type'> {
  /** An element type to render as (string or function). */
  as?: any

  /** A FormField control prop. */
  control?: any

  /** Shorthand for a Label. */
  label?: SemanticShorthandItem<LabelProps>
}

declare const FormButton: React.FC<FormButtonProps>

export default FormButton
