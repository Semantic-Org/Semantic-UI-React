import * as React from 'react';

import { CheckboxProps } from '../../modules/Checkbox';
import { FormFieldProps } from './FormField';

type BaseFormCheckboxProps = CheckboxProps & FormFieldProps
export interface FormCheckboxProps extends BaseFormCheckboxProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop. */
  control?: any;

  /** HTML input type, either checkbox or radio. */
  type?: 'checkbox' | 'radio';
}

declare const FormCheckbox: React.StatelessComponent<FormCheckboxProps>;

export default FormCheckbox;
