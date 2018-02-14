import * as React from 'react';

import { SemanticShorthandItem } from '../..';
import { ButtonProps } from '../../elements/Button';
import { LabelProps } from '../../elements/Label';
import { FormFieldProps } from './FormField';

export interface FormButtonProps extends FormFieldProps, ButtonProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop. */
  control?: any;

  /** Shorthand for a Label. */
  label?: SemanticShorthandItem<LabelProps>;
}

declare const FormButton: React.StatelessComponent<FormButtonProps>;

export default FormButton;

