import * as React from 'react'

import {
  ForwardRefComponent,
  SemanticCOLORS,
  SemanticShorthandContent,
  SemanticShorthandItem,
} from '../../generic'
import { ImageProps } from '../../elements/Image'
import CardContent from './CardContent'
import CardDescription, { CardDescriptionProps } from './CardDescription'
import CardGroup from './CardGroup'
import CardHeader, { CardHeaderProps } from './CardHeader'
import CardMeta, { CardMetaProps } from './CardMeta'

export interface CardProps extends StrictCardProps {
  [key: string]: any
}

export interface StrictCardProps {
  /** An element type to render as (string or function). */
  as?: any

  /** A Card can center itself inside its container. */
  centered?: boolean

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** A Card can be formatted to display different colors. */
  color?: SemanticCOLORS

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent

  /** Shorthand for CardDescription. */
  description?: SemanticShorthandItem<CardDescriptionProps>

  /** Shorthand for primary content of CardContent. */
  extra?: SemanticShorthandContent

  /** A Card can be formatted to take up the width of its container. */
  fluid?: boolean

  /** Shorthand for CardHeader. */
  header?: SemanticShorthandItem<CardHeaderProps>

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href?: string

  /** A card can contain an Image component. */
  image?: SemanticShorthandItem<ImageProps>

  /** A card can be formatted to link to other content. */
  link?: boolean

  /** Shorthand for CardMeta. */
  meta?: SemanticShorthandItem<CardMetaProps>

  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: CardProps) => void

  /** A Card can be formatted to raise above the page. */
  raised?: boolean
}

declare const Card: ForwardRefComponent<CardProps, HTMLDivElement> & {
  Content: typeof CardContent
  Description: typeof CardDescription
  Group: typeof CardGroup
  Header: typeof CardHeader
  Meta: typeof CardMeta
}

export default Card
