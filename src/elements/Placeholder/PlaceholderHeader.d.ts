import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

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

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** A placeholder can contain an image. */
  image?: boolean
}

declare const PlaceholderHeader: ForwardRefComponent<PlaceholderHeaderProps, HTMLDivElement>

export default PlaceholderHeader
