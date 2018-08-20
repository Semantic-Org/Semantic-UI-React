import * as React from 'react'

export interface ButtonOrProps {
  [key: string]: any

  /** An element type to render as (string or function). */
  as?: any

  /** Additional classes. */
  className?: string

  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text?: number | string
}

declare const ButtonOr: React.StatelessComponent<ButtonOrProps>

export default ButtonOr
