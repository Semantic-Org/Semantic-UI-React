import * as React from 'react';

import { ButtonProps } from '../../elements/Button';
import { FormFieldProps } from './FormField';

export interface FormButtonProps extends FormFieldProps, ButtonProps {
}

declare const FormButton: React.StatelessComponent<FormButtonProps>;

export default FormButton;

