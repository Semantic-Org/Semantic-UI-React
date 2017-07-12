import * as React from 'react';

import { ButtonProps } from '../../elements/Button';
import { FormFieldProps } from './FormField';

export interface FormButtonProps extends FormFieldProps, ButtonProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop. */
  control?: any;
}

declare const FormButton: React.StatelessComponent<FormButtonProps>;

export default FormButton;

