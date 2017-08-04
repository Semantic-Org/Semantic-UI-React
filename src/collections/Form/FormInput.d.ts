import * as React from 'react';

import { InputProps } from '../../elements/Input';
import { FormFieldProps } from './FormField';

export interface FormInputProps extends FormFieldProps, InputProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop. */
  control?: any;
}

declare const FormInput: React.StatelessComponent<FormInputProps>;

export default FormInput;
