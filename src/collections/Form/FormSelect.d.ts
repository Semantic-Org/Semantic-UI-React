import * as React from 'react';

import { SelectProps } from '../../addons/Select/Select';
import { FormFieldProps } from './FormField';

interface FormSelectProps extends FormFieldProps, SelectProps {
}

declare const FormSelect: React.StatelessComponent<FormSelectProps>;

export default FormSelect;
