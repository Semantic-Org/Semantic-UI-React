import * as React from 'react';

import { RadioProps } from '../../addons/Radio';
import { FormFieldProps } from './FormField';

export interface FormRadioProps extends FormFieldProps, RadioProps {
  type?: 'checkbox' | 'radio';
}

declare const FormRadio: React.StatelessComponent<FormRadioProps>;

export default FormRadio;
