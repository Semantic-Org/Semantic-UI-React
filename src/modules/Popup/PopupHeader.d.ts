import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface PopupHeaderProps extends StrictPopupHeaderProps {
  [key: string]: any
}

export interface StrictPopupHeaderProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const PopupHeader: ForwardRefComponent<PopupHeaderProps, HTMLDivElement>

export default PopupHeader
