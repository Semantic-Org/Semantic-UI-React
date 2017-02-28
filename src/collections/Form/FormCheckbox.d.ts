import * as React from 'react';

import { CheckboxProps } from '../../modules/Checkbox';
import { FormFieldProps } from './FormField';

interface FormCheckboxProps extends FormFieldProps, CheckboxProps {
  type?: 'checkbox' | 'radio';
}

export const FormCheckbox: React.StatelessComponent<FormCheckboxProps>;

export default FormCheckbox;
