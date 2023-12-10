import * as React from 'react'
import { ForwardRefComponent } from '../../generic'

export interface PlaceholderLineProps extends StrictPlaceholderLineProps {
  [key: string]: any
}

export interface StrictPlaceholderLineProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Additional classes. */
  className?: string

  /** A line can specify how long its contents should appear. */
  length?: 'full' | 'very long' | 'long' | 'medium' | 'short' | 'very short'
}

declare const PlaceholderLine: ForwardRefComponent<PlaceholderLineProps, HTMLDivElement>

export default PlaceholderLine
