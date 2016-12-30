import { ReactFocusEvents, ReactFormEvents, SemanticSIZES } from '../..';
import * as React from 'react';
import { SemanticButtonLABELPOSITIONS } from '../Button';


export interface InputProps extends ReactFocusEvents<HTMLInputElement>, ReactFormEvents<HTMLInputElement> {
  
  /** An Input can be formatted to alert the user to an action they may perform */
  action?: any;

  /** An action can appear along side an Input on the left or right */
  actionPosition?: 'left'

  /** An element type to render as (string or function). */
  as?: any;

  autocomplete?: string; // Used by chrome https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  defaultValue?: string;

  /** An Input field can show that it is disabled */
  disabled?: boolean;

  /** An Input field can show the data contains errors */
  error?: boolean;
  fluid?: boolean;
  focus?: boolean;

  /** Optional Icon to display inside the Input */
  icon?: any;

  /** An Icon can appear inside an Input on the left */
  iconPosition?: 'left';

  /** Shorthand for creating the HTML Input */
  input?: any;

  /** Format to appear on dark backgrounds */
  inverted?: boolean;

  /** Optional Label to display along side the Input */
  label?: any;

  /** A Label can appear outside an Input on the left or right */
  labelPosition?: SemanticButtonLABELPOSITIONS;

  /** An Icon Input field can show that it is currently loading data */
  loading?: boolean;

  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  step?: number;

  /** An Input can vary in size */
  size?: SemanticSIZES;

  /** Transparent Input has no background */
  transparent?: boolean;

  /** The HTML input type */
  type?: string;

  value?: string | number;
  width?: number;
}
export class Input extends React.Component<InputProps, void> {
}