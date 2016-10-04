import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthand,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import CardDescription from './CardDescription'
import CardHeader from './CardHeader'
import CardMeta from './CardMeta'

/**
 * A card can contain blocks of content or extra content meant to be formatted separately from the main content
 */
function CardContent(props) {
  const { className, children, description, extra, header, meta } = props
  const classes = cx(
    className,
    useKeyOnly(extra, 'extra'),
    'content',
  )
  const rest = getUnhandledProps(CardContent, props)
  const ElementType = getElementType(CardContent, props)

  if (children) {
    return <div {...rest} className={classes}>{children}</div>
  }

  return (
    <ElementType {...rest} className={classes}>
      {createShorthand(CardHeader, val => ({ content: val }), header)}
      {createShorthand(CardMeta, val => ({ content: val }), meta)}
      {createShorthand(CardDescription, val => ({ content: val }), description)}
    </ElementType>
  )
}

CardContent._meta = {
  name: 'CardContent',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the CardContent. Mutually exclusive with all shorthand props. */
  children: customPropTypes.every([
    customPropTypes.disallow(['description', 'header', 'meta']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the CardContent className */
  className: PropTypes.string,

  /** Shorthand prop for CardDescription. Mutually exclusive with children. */
  description: CardDescription.propTypes.content,

  /** A card can contain extra content meant to be formatted separately from the main content */
  extra: PropTypes.bool,

  /** Shorthand prop for the CardHeader component. Mutually exclusive with children. */
  header: CardHeader.propTypes.content,

  /** Shorthand prop for the CardMeta component. Mutually exclusive with children. */
  meta: CardMeta.propTypes.content,
}

export default CardContent
