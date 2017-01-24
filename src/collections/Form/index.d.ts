import { ButtonProps } from '../../elements/Button';
import {
    ReactFocusEvents,
    ReactFormEvents,
    SemanticFormOnClick,
    SemanticGenericOnClick,
    SemanticWIDTHS
} from '../..';
import * as React from 'react';
import { InputProps } from '../../elements/Input/index';
import { DropdownProps } from '../../modules/Dropdown/index';


interface FormProps {
  method?: 'get' | 'post';

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Automatically show any error Message children */
  error?: boolean;

  /** A form can have its color inverted for contrast */
  inverted?: boolean;

  /** Automatically show a loading indicator */
  loading?: boolean;

  /**
   * Called on submit
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the form's serialized values.
   */
  onSubmit?: SemanticFormOnClick;

  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply?: boolean;

  /** Called onSubmit with the form node that returns the serialized form object */
  serializer?: ()=>void;  // TODO, check;

  /** A form can vary in size */
  size?: string;

  /** Automatically show any success Message children */
  success?: boolean;

  /** Automatically show any warning Message children */
  warning?: boolean;

  /** Forms can automatically divide fields to be equal width */
  widths?: SemanticWIDTHS | 'equal';
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

interface FormFieldProps {
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

  /** Individual fields may be disabled */
  disabled?: any;

  /** Individual fields may display an error state */
  error?: boolean;

  /** A field can have its label next to instead of above it */
  inline?: boolean;

  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`
  /** Mutually exclusive with children. */
  label?: string;

  /** A field can show that input is mandatory.  Requires a label. */
  required?: any;

  /** Passed to the control component (i.e. <input type='password' />) */
  type?: string;

  /** A field can specify its width in grid columns */
  width?: SemanticWIDTHS;
}

export const FormField: React.ComponentClass<FormFieldProps>;

interface FormButtonProps extends ButtonProps {

  /** An element type to render as (string or function). */
  as?: any;

  control?: any;
  width?: number;
}

export const FormButton: React.ComponentClass<FormButtonProps>;

interface FormCheckboxProps {
  /** An element type to render as (string or function). */
  as?: any;
  control?: any;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string|number|Array<string>|Array<number>;
}

export const FormCheckbox: React.ComponentClass<FormCheckboxProps>;

interface FormDropdownProps extends DropdownProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop */
  control?: any;
  label?: string;
  name?: string;
  placeholder?: string;
}

export const FormDropdown: React.ComponentClass<FormDropdownProps>;

interface FormGroupProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Fields can show related choices */
  grouped?: boolean;

  /** Multiple fields may be inline in a row */
  inline?: boolean;

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width */
  widths?: SemanticWIDTHS | 'equal';
}

export const FormGroup: React.ComponentClass<FormGroupProps>;

interface FormInputProps extends InputProps {
}

export const FormInput: React.ComponentClass<FormInputProps>;

interface FormRadioProps {
  /** An element type to render as (string or function). */
  as?: any;
  checked?: boolean;

  /** A FormField control prop */
  control?: any;
  label?: string;
  name?: string;
  onChange?: SemanticGenericOnClick;
  placeholder?: string;
  value?: string|number|Array<string>|Array<number>;
}

export const FormRadio: React.ComponentClass<FormRadioProps>;

interface FormSelectProps extends ReactFormEvents<HTMLSelectElement>, ReactFocusEvents<HTMLSelectElement> {
  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop */
  control?: any;
  label?: string;
  multiple?: boolean;
  name?: string;
  options?: any;
  placeholder?: string;
  search?: boolean;
  width?: number;
  compact?: boolean;
}

export const FormSelect: React.ComponentClass<FormSelectProps>;

export interface FormTextAreaProps extends ReactFormEvents<HTMLTextAreaElement>, ReactFocusEvents<HTMLTextAreaElement> {
  /** An element type to render as (string or function). */
  as?: any;

  /** A FormField control prop */
  control?: any;
  label?: string;
  name?: string;
  options?: any;
  placeholder?: string;
  rows?: string|number;
  width?: number;
}

export const FormTextArea: React.ComponentClass<FormTextAreaProps>;
