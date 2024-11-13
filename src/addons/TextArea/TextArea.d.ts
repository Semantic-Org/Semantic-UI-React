import * as React from 'react'
import { ForwardRefComponent } from '../../generic'

export interface TextAreaProps extends StrictTextAreaProps {
  [key: string]: any
}

export interface StrictTextAreaProps {
  /** An element type to render as (string or function). */
  as?: any

  /**
   * Called on change.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} props - All props.
   * @param {string} value - The value of the textarea.
   */
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    props: TextAreaProps,
    value: string,
  ) => void

  /**
   * Called on input.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} props - All props.
   * @param {string} value - The value of the textarea.
   */
  onInput?: (
    event: React.FormEvent<HTMLTextAreaElement>,
    props: TextAreaProps,
    value: string,
  ) => void

  /** Indicates row count for a TextArea. */
  rows?: number | string

  /** The value of the textarea. */
  value?: number | string
}

declare const TextArea: ForwardRefComponent<TextAreaProps, HTMLTextAreaElement>

export default TextArea
