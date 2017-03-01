import * as React from 'react';

import { DropdownProps } from '../../modules/Dropdown/Dropdown';
import { FormFieldProps } from './FormField';

interface FormDropdownProps extends FormFieldProps, DropdownProps {
}

declare const FormDropdown: React.StatelessComponent<FormDropdownProps>;

export default FormDropdown;
