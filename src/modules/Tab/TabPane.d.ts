import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface TabPaneProps extends StrictTabPaneProps {
  [key: string]: any
}

export interface StrictTabPaneProps {
  /** An element type to render as (string or function). */
  as?: any

  /** A tab pane can be active. */
  active?: boolean

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** A Tab.Pane can display a loading indicator. */
  loading?: boolean
}

declare const TabPane: ForwardRefComponent<TabPaneProps, HTMLDivElement>

export default TabPane
