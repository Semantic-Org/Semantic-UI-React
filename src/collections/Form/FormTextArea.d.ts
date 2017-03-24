import * as React from 'react';

import { TextAreaProps } from '../../addons/TextArea';
import { FormFieldProps } from './FormField';

export interface FormTextAreaProps extends FormFieldProps, TextAreaProps {
}

declare const FormTextArea: React.StatelessComponent<FormTextAreaProps>;

export default FormTextArea;
