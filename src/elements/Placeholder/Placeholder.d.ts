import * as React from 'react'

import PlaceholderHeader from './PlaceholderHeader'
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
}

interface PlaceholderComponent extends React.StatelessComponent<PlaceholderProps> {
  Header: typeof PlaceholderHeader
  Line: typeof PlaceholderLine
  Paragraph: typeof PlaceholderParagraph
}

declare const Placeholder: PlaceholderComponent

export default PlaceholderComponent
