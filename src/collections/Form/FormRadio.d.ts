import * as React from 'react';

import { RadioProps } from '../../addons/Radio/Radio';
import { FormFieldProps } from './FormField';

interface FormRadioProps extends FormFieldProps, RadioProps {
  type?: 'checkbox' | 'radio';
}

declare const FormRadio: React.StatelessComponent<FormRadioProps>;

export default FormRadio;
