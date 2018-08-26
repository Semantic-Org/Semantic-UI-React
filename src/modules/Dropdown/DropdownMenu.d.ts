import * as React from 'react'
import { SemanticShorthandContent } from '../..'

export interface DropdownMenuProps {
  [key: string]: any

  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** A dropdown menu can open to the left or to the right. */
  direction?: 'left' | 'right'

  /** Whether or not the dropdown menu is displayed. */
  open?: boolean

  /** A dropdown menu can scroll. */
  scrolling?: boolean
}

declare const DropdownMenu: React.StatelessComponent<DropdownMenuProps>

export default DropdownMenu
