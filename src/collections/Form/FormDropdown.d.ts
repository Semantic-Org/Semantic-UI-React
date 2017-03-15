import * as React from 'react';

import { DropdownProps } from '../../modules/Dropdown';
import { FormFieldProps } from './FormField';

export interface FormDropdownProps extends FormFieldProps, DropdownProps {
}

declare const FormDropdown: React.StatelessComponent<FormDropdownProps>;

export default FormDropdown;
