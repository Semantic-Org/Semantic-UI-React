import * as React from 'react';

import { default as FormField } from './FormField';
import { default as FormButton } from './FormButton';
import { default as FormCheckbox } from './FormCheckbox';
import { default as FormDropdown } from './FormDropdown';
import { default as FormGroup } from './FormGroup';
import { default as FormInput } from './FormInput';
import { default as FormRadio } from './FormRadio';
import { default as FormSelect } from './FormSelect';
import { default as FormTextArea } from './FormTextArea';

export interface FormProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Automatically show any error Message children. */
  error?: boolean;

  /** A form can have its color inverted for contrast. */
  inverted?: boolean;

  /** Automatically show a loading indicator. */
  loading?: boolean;

  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply?: boolean;

  /** A form can vary in size. */
  size?: string;

  /** Automatically show any success Message children. */
  success?: boolean;

  /** Automatically show any warning Message children. */
  warning?: boolean;

  /** Forms can automatically divide fields to be equal width. */
  widths?: 'equal';
}

interface FormComponent extends React.StatelessComponent<FormProps> {
  Field: typeof FormField;
  Button: typeof FormButton;
  Checkbox: typeof FormCheckbox;
  Dropdown: typeof FormDropdown;
  Group: typeof FormGroup;
  Input: typeof FormInput;
  Radio: typeof FormRadio;
  Select: typeof FormSelect;
  TextArea: typeof FormTextArea;
}

declare const Form: FormComponent;

export default Form;
