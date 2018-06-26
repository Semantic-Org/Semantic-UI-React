import * as React from 'react'

export interface DropdownSearchInputProps {
  [key: string]: any

  /** An element type to render as (string or function). */
  as?: any

  /** An input can have the auto complete. */
  autoComplete?: string

  /** Additional classes. */
  className?: string

  /** A ref handler for input. */
  inputRef?: (c: HTMLInputElement) => void

  /** An input can receive focus. */
  tabIndex?: number | string

  /** The HTML input type. */
  type?: string

  /** Stored value. */
  value?: number | string
}

declare const DropdownSearchInput: React.ComponentClass<DropdownSearchInputProps>

export default DropdownSearchInput
