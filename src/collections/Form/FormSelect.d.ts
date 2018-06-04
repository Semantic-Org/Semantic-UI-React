import * as React from 'react';

import { SelectProps } from '../../addons/Select';
import { DropdownItemProps } from '../../modules/Dropdown/DropdownItem';
import { FormFieldProps } from './FormField';

export interface FormSelectProps extends FormFieldProps, SelectProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop. */
  control?: any;

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: Array<DropdownItemProps>;
}

declare const FormSelect: React.StatelessComponent<FormSelectProps>;

export default FormSelect;
