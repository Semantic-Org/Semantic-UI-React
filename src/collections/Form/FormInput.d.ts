import * as React from 'react';

import { SemanticShorthandItem } from '../..';
import { LabelProps } from '../../elements/Label';
import { InputProps } from '../../elements/Input';
import { FormFieldProps } from './FormField';

export interface FormInputProps extends FormFieldProps, InputProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop. */
  control?: any;

  /** Shorthand for a Label. */
  label?: SemanticShorthandItem<LabelProps>;
}

declare const FormInput: React.StatelessComponent<FormInputProps>;

export default FormInput;
