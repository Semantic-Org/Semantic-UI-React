import * as React from 'react';

import { InputProps } from '../../elements/Input';
import { FormFieldProps } from './FormField';

export interface FormInputProps extends FormFieldProps, InputProps {
}

declare const FormInput: React.StatelessComponent<FormInputProps>;

export default FormInput;
