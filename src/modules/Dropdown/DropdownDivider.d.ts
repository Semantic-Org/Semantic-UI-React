import { ForwardRefComponent } from '../../generic'

export interface DropdownDividerProps extends StrictDropdownDividerProps {
  [key: string]: any
}

export interface StrictDropdownDividerProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Additional classes. */
  className?: string
}

declare const DropdownDivider: ForwardRefComponent<DropdownDividerProps, HTMLDivElement>

export default DropdownDivider
