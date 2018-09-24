import * as React from 'react'

export interface PlaceholderHeaderProps extends StrictPlaceholderHeaderProps {
  [key: string]: any
}

export interface StrictPlaceholderHeaderProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string
}

interface PlaceholderHeaderComponent extends React.StatelessComponent<PlaceholderHeaderProps> {}

declare const PlaceholderHeader: PlaceholderHeaderComponent

export default PlaceholderHeader
