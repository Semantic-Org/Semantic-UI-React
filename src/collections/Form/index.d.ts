import * as React from 'react';

import { SemanticWIDTHS } from '../..';
import { RadioProps } from '../../addons/Radio';
import { SelectProps } from '../../addons/Select';
import { TextAreaProps } from '../../addons/TextArea';
import { ButtonProps } from '../../elements/Button';
import { InputProps } from '../../elements/Input';
import { CheckboxProps } from '../../modules/Checkbox';
import { DropdownProps } from '../../modules/Dropdown';

interface FormProps {
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

interface FormClass extends React.ComponentClass<FormProps> {
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

export const Form: FormClass;

interface FormButtonProps extends FormFieldProps, ButtonProps {
}

export const FormButton: React.StatelessComponent<FormButtonProps>;

interface FormCheckboxProps extends FormFieldProps, CheckboxProps {
  type?: 'checkbox' | 'radio';
}

export const FormCheckbox: React.StatelessComponent<FormCheckboxProps>;

interface FormDropdownProps extends FormFieldProps, DropdownProps {
}

export const FormDropdown: React.StatelessComponent<FormDropdownProps>;

interface FormFieldProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control?: any;

  /** Individual fields may be disabled. */
  disabled?: boolean;

  /** Individual fields may display an error state. */
  error?: boolean;

  /** A field can have its label next to instead of above it. */
  inline?: boolean;

  /** Mutually exclusive with children. */
  label?: any;

  /** A field can show that input is mandatory.  Requires a label. */
  required?: any;

  /** Passed to the control component (i.e. <input type='password' />) */
  type?: string;

  /** A field can specify its width in grid columns */
  width?: SemanticWIDTHS;
}

export const FormField: React.StatelessComponent<FormFieldProps>;

interface FormGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Fields can show related choices. */
  grouped?: boolean;

  /** Multiple fields may be inline in a row. */
  inline?: boolean;

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths?: SemanticWIDTHS | 'equal';
}

export const FormGroup: React.StatelessComponent<FormGroupProps>;

interface FormInputProps extends FormFieldProps, InputProps {
}

export const FormInput: React.StatelessComponent<FormInputProps>;

interface FormRadioProps extends FormFieldProps, RadioProps {
  type?: 'checkbox' | 'radio';
}

export const FormRadio: React.StatelessComponent<FormRadioProps>;

interface FormSelectProps extends FormFieldProps, SelectProps {
}

export const FormSelect: React.StatelessComponent<FormSelectProps>;

interface FormTextAreaProps extends FormFieldProps, TextAreaProps {
}

export const FormTextArea: React.StatelessComponent<FormTextAreaProps>;
