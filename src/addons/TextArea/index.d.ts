import * as React from 'react';
import { FormTextAreaProps } from '../../collections/Form/index';

export interface TextAreaProps extends FormTextAreaProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Indicates whether height of the textarea fits the content or not */
  autoHeight?: boolean;

  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>, value: TextAreaOnChangeValue) => void;

  /** The value of the textarea. */
  value?: string;
}

interface TextAreaOnChangeValue extends TextAreaProps {
  value: any;
}

export const TextArea: React.ComponentClass<TextAreaProps>;
