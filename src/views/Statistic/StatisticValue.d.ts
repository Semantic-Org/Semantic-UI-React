import * as React from 'react'
import { SemanticShorthandContent } from '../..'

export interface StatisticValueProps {
  [key: string]: any

  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** Format the value with smaller font size to fit nicely beside number values. */
  text?: boolean
}

declare const StatisticValue: React.StatelessComponent<StatisticValueProps>

export default StatisticValue
