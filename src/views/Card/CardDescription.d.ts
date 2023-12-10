import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface CardDescriptionProps extends StrictCardDescriptionProps {
  [key: string]: any
}

export interface StrictCardDescriptionProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** A card description can adjust its text alignment. */
  textAlign?: 'center' | 'left' | 'right'
}

declare const CardDescription: ForwardRefComponent<CardDescriptionProps, HTMLDivElement>

export default CardDescription
