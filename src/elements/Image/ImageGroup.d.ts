import * as React from 'react'
import { SemanticSIZES, SemanticShorthandContent } from '../..'

export interface ImageGroupProps {
  [key: string]: any

  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** A group of images can be formatted to have the same size. */
  size?: SemanticSIZES
}

declare const ImageGroup: React.StatelessComponent<ImageGroupProps>

export default ImageGroup
