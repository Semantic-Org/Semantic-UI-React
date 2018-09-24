import * as React from 'react'

export interface PlaceholderLineProps extends StrictPlaceholderLineProps {
  [key: string]: any
}

export interface StrictPlaceholderLineProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string
}

interface PlaceholderLineComponent extends React.StatelessComponent<PlaceholderLineProps> {}

declare const PlaceholderLine: PlaceholderLineComponent

export default PlaceholderLine
