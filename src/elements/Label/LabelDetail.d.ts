import * as React from 'react'
import { ForwardRefComponent, SemanticShorthandContent } from '../../generic'

export interface LabelDetailProps extends StrictLabelDetailProps {
  [key: string]: any
}

export interface StrictLabelDetailProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent
}

declare const LabelDetail: ForwardRefComponent<LabelDetailProps, HTMLDivElement>

export default LabelDetail
