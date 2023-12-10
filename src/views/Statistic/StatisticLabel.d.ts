import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface StatisticLabelProps extends StrictStatisticLabelProps {
  [key: string]: any
}

export interface StrictStatisticLabelProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const StatisticLabel: ForwardRefComponent<StatisticLabelProps, HTMLDivElement>

export default StatisticLabel
