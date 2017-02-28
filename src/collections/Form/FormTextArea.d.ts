import * as React from 'react';

import { TextAreaProps } from '../../addons/TextArea';
import { FormFieldProps } from './FormField';

interface FormTextAreaProps extends FormFieldProps, TextAreaProps {
}

const FormTextArea: React.StatelessComponent<FormTextAreaProps>;

export default FormTextArea;
