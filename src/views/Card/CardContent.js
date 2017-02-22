import cx from 'classnames'
import _ from 'lodash'
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
 * A card can contain blocks of content or extra content meant to be formatted separately from the main content.
 */
function CardContent(props) {
  const {
    children,
    className,
    description,
    extra,
    header,
    meta,
  } = props

  const classes = cx(
    className,
    useKeyOnly(extra, 'extra'),
    'content',
  )
  const rest = getUnhandledProps(CardContent, props)
  const ElementType = getElementType(CardContent, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
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

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for CardDescription. */
  description: customPropTypes.itemShorthand,

  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra: PropTypes.bool,

  /** Shorthand for CardHeader. */
  header: customPropTypes.itemShorthand,

  /** Shorthand for CardMeta. */
  meta: customPropTypes.itemShorthand,
}

export default CardContent
