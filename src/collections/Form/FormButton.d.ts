import * as React from 'react';

import { ButtonProps } from '../../elements/Button/Button';
import { FormFieldProps } from './FormField';

interface FormButtonProps extends FormFieldProps, ButtonProps {
}

declare const FormButton: React.StatelessComponent<FormButtonProps>;

export default FormButton;

