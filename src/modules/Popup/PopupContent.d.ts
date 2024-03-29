import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface PopupContentProps extends StrictPopupContentProps {
  [key: string]: any
}

export interface StrictPopupContentProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const PopupContent: ForwardRefComponent<PopupContentProps, HTMLDivElement>

export default PopupContent
