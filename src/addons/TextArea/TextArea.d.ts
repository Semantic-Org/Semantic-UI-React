import * as React from 'react';

export interface TextAreaProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Indicates whether height of the textarea fits the content or not. */
  autoHeight?: boolean;

  /**
   * Called on change.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>, data: TextAreaOnChangeData) => void;

  /** Indicates row count for a TextArea. */
  rows?: number | string;

  /** Custom TextArea style. */
  style?: Object;

  /** The value of the textarea. */
  value?: number | string;
}

export interface TextAreaOnChangeData extends TextAreaProps {
  value?: string;
}

declare const TextArea: React.ComponentClass<TextAreaProps>;

export default TextArea;
