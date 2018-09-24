import * as React from 'react'

export interface PlaceholderParagraphProps extends StrictPlaceholderParagraphProps {
  [key: string]: any
}

export interface StrictPlaceholderParagraphProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string
}

interface PlaceholderParagraphComponent
  extends React.StatelessComponent<PlaceholderParagraphProps> {}

declare const PlaceholderParagraph: PlaceholderParagraphComponent

export default PlaceholderParagraph
