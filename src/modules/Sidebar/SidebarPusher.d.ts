import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface SidebarPusherProps extends StrictSidebarPusherProps {
  [key: string]: any
}

export interface StrictSidebarPusherProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** Controls whether or not the dim is displayed. */
  dimmed?: boolean
}

declare const SidebarPusher: ForwardRefComponent<SidebarPusherProps, HTMLDivElement>

export default SidebarPusher
