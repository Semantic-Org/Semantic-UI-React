import * as React from 'react'
import { SemanticShorthandContent } from '../../generic'

export interface ModalDimmerProps extends StrictModalDimmerProps {
  [key: string]: any
}

export interface StrictModalDimmerProps {
  /** An element type to render as (string or function). */
  as?: any

  /** A dimmer can be blurred. */
  blurring?: boolean

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** A dimmer can center its contents in the viewport. */
  centered?: boolean

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** A dimmer can be inverted. */
  inverted?: boolean

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode?: any

  /** A dimmer can make body scrollable. */
  scrolling?: boolean
}

declare const ModalDimmer: React.FC<ModalDimmerProps>

export default ModalDimmer
