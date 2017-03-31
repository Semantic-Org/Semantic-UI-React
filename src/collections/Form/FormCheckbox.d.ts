import * as React from 'react';

import { CheckboxProps } from '../../modules/Checkbox';
import { FormFieldProps } from './FormField';

export interface FormCheckboxProps extends FormFieldProps, CheckboxProps {
  type?: 'checkbox' | 'radio';
}

declare const FormCheckbox: React.StatelessComponent<FormCheckboxProps>;

export default FormCheckbox;
