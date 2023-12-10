import { ForwardRefComponent } from '../../generic'

export interface ButtonOrProps extends StrictButtonOrProps {
  [key: string]: any
}

export interface StrictButtonOrProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Additional classes. */
  className?: string

  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text?: number | string
}

declare const ButtonOr: ForwardRefComponent<ButtonOrProps, HTMLDivElement>

export default ButtonOr
