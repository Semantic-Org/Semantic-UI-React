import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

import PlaceholderHeader from './PlaceholderHeader'
import PlaceholderImage from './PlaceholderImage'
import PlaceholderLine from './PlaceholderLine'
import PlaceholderParagraph from './PlaceholderParagraph'

export interface PlaceholderProps extends StrictPlaceholderProps {
  [key: string]: any
}

export interface StrictPlaceholderProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** A fluid placeholder takes up the width of its container. */
  fluid?: boolean

  /** A placeholder can have their colors inverted. */
  inverted?: boolean
}

declare const Placeholder: ForwardRefComponent<PlaceholderProps, HTMLDivElement> & {
  Header: typeof PlaceholderHeader
  Line: typeof PlaceholderLine
  Image: typeof PlaceholderImage
  Paragraph: typeof PlaceholderParagraph
}

export default Placeholder
