import * as React from 'react';

import { InputProps } from '../../elements/Input';
import { FormFieldProps } from './FormField';

interface FormInputProps extends FormFieldProps, InputProps {
}

const FormInput: React.StatelessComponent<FormInputProps>;

export default FormInput;
